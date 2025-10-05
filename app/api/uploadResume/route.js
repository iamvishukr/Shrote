import { NextResponse } from 'next/server';
import Busboy from 'busboy';
import fs from 'fs';
import path from 'path';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = Object.fromEntries(req.headers);
      const busboy = Busboy({ headers });

      const uploadDir = path.join(process.cwd(), 'public/uploads');
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      let fields = {};
      let fileTempPath = '';
      let fileExt = '';

      busboy.on('file', (fieldname, file, info) => {
        fileExt = path.extname(info.filename);
        const tempPath = path.join(uploadDir, `temp-${Date.now()}${fileExt}`);
        fileTempPath = tempPath;
        file.pipe(fs.createWriteStream(tempPath));
      });

      busboy.on('field', (fieldname, val) => {
        fields[fieldname] = val;
      });

      busboy.on('finish', async () => {
        try {
          const username = (fields.username || 'user').replace(/\s+/g, '_');
          const finalFileName = `${username}_${Date.now()}${fileExt}`;
          const finalPath = path.join(uploadDir, finalFileName);
          fs.renameSync(fileTempPath, finalPath);

          const resumePath = `/uploads/${finalFileName}`;

          
          await addDoc(collection(db, 'joinOurTeam'), {
            ...fields,
            resume: resumePath,
            timestamp: new Date(),
          });

          resolve(NextResponse.json({ success: true, path: resumePath }));
        } catch (err) {
          console.log(err);
          reject(NextResponse.json({ success: false, error: err.message }, { status: 500 }));
        }
      });

      
      const chunks = [];
      const reader = req.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }
      const buffer = Buffer.concat(chunks.map(c => Buffer.from(c)));
      busboy.end(buffer);

    } catch (err) {
      console.log(err);
      reject(NextResponse.json({ success: false, error: err.message }, { status: 500 }));
    }
  });
}
