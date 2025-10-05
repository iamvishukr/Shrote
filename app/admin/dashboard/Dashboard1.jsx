"use client";

import { useState, useEffect, useRef } from "react";
import {
  MoreHorizontal,
  ShoppingCart,
  BarChart3,
  DollarSign,
  Clock,
  FileText,
  Users,
  Plus,
  Eye,
  Trash2,
  CreditCard,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { IconCreditCard, IconListDetails } from "@tabler/icons-react";

import { BarChart, LabelList, LineChart } from "recharts";
import Footer from "./Footer";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  Area,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useChart } from "@/components/ui/chart";

export default function DashboardContent() {
  return (
    <ChartContainer>
      <Dashboard />
    </ChartContainer>
  );
}

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [animatedValues, setAnimatedValues] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("orders");

  const [salesData, setSalesData] = useState([
    { month: "Jan", value: 120 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 85 },
    { month: "Apr", value: 150 },
    { month: "May", value: 200 },
    { month: "Jun", value: 170 },
  ]);
  const lineChartData = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 150 },
    { day: "Wed", value: 100 },
    { day: "Thu", value: 180 },
    { day: "Fri", value: 90 },
    { day: "Sat", value: 200 },
    { day: "Sun", value: 160 },
  ];

  const [revenueAmount, setRevenueAmount] = useState(4673);
  const [revenueGrowth, setRevenueGrowth] = useState(15.2);
  const [revenueValues, setRevenueValues] = useState([
    60, 80, 70, 90, 100, 75, 85,
  ]);

  const earningsData = [
    { month: "Jan", orders: 30, sales: 35, profit: 28, income: 35 },
    { month: "Feb", orders: 25, sales: 32, profit: 24, income: 32 },
    { month: "Mar", orders: 20, sales: 30, profit: 20, income: 30 },
    { month: "Apr", orders: 45, sales: 35, profit: 42, income: 48 },
    { month: "May", orders: 28, sales: 32, profit: 24, income: 32 },
    { month: "Jun", orders: 22, sales: 28, profit: 20, income: 28 },
    { month: "Jul", orders: 30, sales: 48, profit: 25, income: 30 },
    { month: "Aug", orders: 28, sales: 32, profit: 24, income: 32 },
    { month: "Sep", orders: 20, sales: 28, profit: 20, income: 28 },
    { month: "Oct", orders: 30, sales: 32, profit: 25, income: 32 },
    { month: "Nov", orders: 28, sales: 30, profit: 24, income: 30 },
    { month: "Dec", orders: 20, sales: 28, profit: 20, income: 28 },
  ];

  const highlightedIndexMap = {
    orders: 3,
    sales: 6,
    profit: 3,
    income: 3,
  };

  const CustomBar = (props) => {
    const { x, y, width, height, index } = props;

    const isActive = index === highlightedIndexMap[activeTab];

    const barHeight = isActive == true ? height : height * 1;
    const barWidth = isActive ? width : width * 0.6;
    const adjustedY = isActive ? y : y + (height - barHeight);
    const adjustedX = isActive ? x : x + (width - barWidth) / 2;

    const barFill = isActive ? "#7367F0" : "#E9E7FD";

    return (
      <g>
        <rect
          x={adjustedX}
          y={adjustedY}
          width={barWidth}
          height={barHeight}
          fill={barFill}
          rx={6}
          ry={6}
        />
      </g>
    );
  };
  const CustomLabel = ({ x, y, width, value }) => {
    const labelX = x + width / 2;
    const labelY = y - 4;

    return (
      <text
        x={labelX}
        y={labelY}
        textAnchor="middle"
        fill="#353030ff"
        fontSize={12}
        fontWeight={500}
      >
        {value}k
      </text>
    );
  };

  const [projectEarnings, setProjectEarnings] = useState(43742);
  const [projectGrowth, setProjectGrowth] = useState(10.2);

  const [metricCards, setMetricCards] = useState({
    orders: { value: 124, growth: 12.6 },
    sales: { value: 175, growth: -16.2 },
    profit: { value: 1.28, growth: -12.2 },
    totalSales: { value: 24.67, growth: 24.5 },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);

      animateValue("revenueAmount", 0, revenueAmount, 2000);
      animateValue("projectEarnings", 0, projectEarnings, 2000);
      animateValue("ordersValue", 0, metricCards.orders.value, 1500);
      animateValue("salesValue", 0, metricCards.sales.value, 1500);
      animateValue("profitValue", 0, metricCards.profit.value, 1500);
      animateValue("totalSalesValue", 0, metricCards.totalSales.value, 1500);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const animateValue = (key, start, end, duration) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;

      setAnimatedValues((prev) => ({
        ...prev,
        [key]: current,
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  const toggleDropdown = (cardId) => {
    setActiveDropdown((prev) => (prev === cardId ? null : cardId));
    setDropdownOpen((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const DropdownMenu = ({ cardId, onViewMore, onDelete }) => (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(cardId)}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
      >
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </button>

      {dropdownOpen[cardId] && (
        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-10 min-w-[140px]">
          <button
            onClick={() => {
              onViewMore?.();
              toggleDropdown(cardId);
            }}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View More
          </button>
          <button
            onClick={() => {
              onDelete?.();
              toggleDropdown(cardId);
            }}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  );

  const ZoomableChart = ({ children, chartId }) => {
    const [scale, setScale] = useState(1);
    const chartRef = useRef(null);

    const handleWheel = (e) => {
      if (chartRef.current?.contains(e.target)) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale((prev) => Math.max(0.5, Math.min(2, prev + delta)));
      }
    };

    useEffect(() => {
      const chart = chartRef.current;
      if (chart) {
        chart.addEventListener("wheel", handleWheel, { passive: false });
        return () => chart.removeEventListener("wheel", handleWheel);
      }
    }, []);

    return (
      <div
        ref={chartRef}
        className="transition-transform duration-200 hover:cursor-zoom-in"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
        onMouseLeave={() => setScale(1)}
      >
        {children}
      </div>
    );
  };

  const updateRevenueData = () => {
    const newValues = revenueValues.map(
      () => Math.floor(Math.random() * 100) + 20
    );
    setRevenueValues(newValues);
    const newAmount = Math.floor(Math.random() * 5000) + 3000;
    setRevenueAmount(newAmount);
    setRevenueGrowth((Math.random() * 30 - 10).toFixed(1));
    animateValue("revenueAmount", 0, newAmount, 1500);
  };

  const updateEarningsData = () => {
    const newData = earningsData.map((item) => ({
      ...item,
      value: Math.floor(Math.random() * 50) + 5,
    }));
    setEarningsData(newData);
  };

  const updateMetrics = () => {
    const newMetrics = {
      orders: {
        value: Math.floor(Math.random() * 200) + 50,
        growth: (Math.random() * 40 - 20).toFixed(1),
      },
      sales: {
        value: Math.floor(Math.random() * 300) + 100,
        growth: (Math.random() * 40 - 20).toFixed(1),
      },
      profit: {
        value: (Math.random() * 5 + 0.5).toFixed(2),
        growth: (Math.random() * 40 - 20).toFixed(1),
      },
      totalSales: {
        value: (Math.random() * 50 + 10).toFixed(2),
        growth: (Math.random() * 40 - 20).toFixed(1),
      },
    };
    setMetricCards(newMetrics);
    animateValue("ordersValue", 0, newMetrics.orders.value, 1500);
    animateValue("salesValue", 0, newMetrics.sales.value, 1500);
    animateValue("profitValue", 0, newMetrics.profit.value, 1500);
    animateValue("totalSalesValue", 0, newMetrics.totalSales.value, 1500);
  };

  const updateProjectStatus = () => {
    const newEarnings = Math.floor(Math.random() * 50000) + 20000;
    setProjectEarnings(newEarnings);
    setProjectGrowth((Math.random() * 30 - 10).toFixed(1));
    animateValue("projectEarnings", 0, newEarnings, 1500);
  };

  const HexagonChart = () => (
    <ZoomableChart chartId="hexagon">
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="100,20 170,60 170,140 100,180 30,140 30,60"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <polygon
            points="100,35 155,70 155,130 100,165 45,130 45,70"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />

          <polygon
            points="100,30 160,65 160,135 100,165 40,135 40,65"
            fill="url(#hexGradient)"
            fillOpacity="0.8"
            className={`transition-all duration-2000 ${
              isLoaded ? "opacity-80" : "opacity-0"
            }`}
          />

          <defs>
            <linearGradient
              id="hexGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          <text
            x="100"
            y="15"
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            Jan
          </text>
          <text
            x="175"
            y="65"
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            Feb
          </text>
          <text
            x="175"
            y="145"
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            Mar
          </text>
          <text
            x="100"
            y="195"
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            Apr
          </text>
          <text
            x="25"
            y="145"
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            May
          </text>
          <text
            x="25"
            y="65"
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            Jun
          </text>
        </svg>
      </div>
    </ZoomableChart>
  );

  const MiniBarChart = ({ data, height = 100 }) => (
    <ZoomableChart chartId="bar">
      <div className="flex items-end justify-between h-20 gap-1">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div
              className={`bg-green-500 rounded-sm min-w-[8px] transition-all duration-1000 ${
                isLoaded ? "" : "h-0"
              }`}
              style={{
                height: isLoaded ? `${(value / 100) * height}%` : "0%",
                transitionDelay: `${index * 100}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </ZoomableChart>
  );

  const LineChartComponent = ({ data }) => (
    <ZoomableChart chartId="line">
      <div className="h-20">
        <ResponsiveContainer width="100%">
          <RechartsLineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 4,
              right: 6,
              left: 12,
              bottom: 2,
            }}
          >
            <defs>
              <filter
                id="shadow-down"
                x="-40%"
                y="-10%"
                width="180%"
                height="150%"
              >
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="6"
                  floodColor="#28a745"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tick={false}
              tickLine={false}
              axisLine={false}
            />

            <Line
              dataKey="value"
              type="natural"
              stroke="#28a745"
              strokeWidth={2}
              dot={false}
              style={{ filter: "url(#shadow-down)" }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </ZoomableChart>
  );

  const chartData = [
    { month: "January", sales: 160, visit: 130 },
    { month: "February", sales: 165, visit: 200 },
    { month: "March", sales: 160, visit: 110 },
    { month: "April", sales: 165, visit: 130 },
    { month: "May", sales: 160, visit: 130 },
    { month: "June", sales: 165, visit: 130 },
  ];
  const chartConfiga = {
    sales: {
      label: "Sales",
      color: "#28a745",
    },
    visit: {
      label: "Visit ",
      color: " #dc3545",
    },
  };

  const SalesRadarChart = ({ data }) => {
    return (
      <ChartContainer
        config={chartConfiga}
        className="mx-auto -mt-12 aspect-square w-[350px] max-h-[350px]"
      >
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="#cac6c6ff" />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar name="Sales" dataKey="sales" stroke="#7367F0" fill="#7367F0" />
          <Radar name="Visit" dataKey="visit" stroke="#00BAD1" fill="#00BAD1" />
        </RadarChart>
      </ChartContainer>
    );
  };

  const [revenueData] = useState([
    { day: "M", value: 60 },
    { day: "T", value: 80 },
    { day: "W", value: 70 },
    { day: "T", value: 90 },
    { day: "F", value: 100 },
    { day: "S", value: 75 },
    { day: "S", value: 85 },
  ]);

  const renderCustomBarr = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <rect x={x} y={y} width={width} height={height} fill="#28C76F" rx={8} />
    );
  };

  const countriesData = [
    {
      country: "United States",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1200px-Flag_of_the_United_States_%28Web_Colors%29.svg.png",
      amount: "$8,567k",
      change: "+25.8%",
      positive: true,
    },
    {
      country: "Brazil",
      flag: "https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg",
      amount: "$2,415k",
      change: "-6.2%",
      positive: false,
    },
    {
      country: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
      amount: "$865k",
      change: "+12.4%",
      positive: true,
    },
    {
      country: "Australia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
      amount: "$745k",
      change: "-11.9%",
      positive: false,
    },
    {
      country: "France",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
      amount: "$45",
      change: "+16.2%",
      positive: true,
    },
    {
      country: "China",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      amount: "$12k",
      change: "+14.8%",
      positive: true,
    },
  ];

  const activities = [
    {
      id: 1,
      title: "12 Invoices have been paid",
      description: "Invoices have been paid to the company",
      file: "invoices.pdf",
      time: "12 min ago",
      color: "#7367F0",
    },
    {
      id: 2,
      title: "Client Meeting",
      description: "Project meeting with John @10:15am",
      user: "Lester McCarthy (Client)",
      role: "CEO of Pixinvent",
      time: "45 min ago",
      color: "#28C76F",
    },
    {
      id: 3,
      title: "Create a new project for client",
      description: "6 team members in a project",
      teamCount: "+3",
      time: "2 Day Ago",
      color: "#00BAD1",
    },
  ];
  const projects = [
    {
      name: "Laravel",
      type: "eCommerce",
      progress: 65,
      color: "bg-red-500",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    },
    {
      name: "Figma",
      type: "App UI Kit",
      progress: 86,
      color: "bg-purple-500",
      icon: "https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o",
    },
    {
      name: "VueJs",
      type: "Calendar App",
      progress: 90,
      color: "bg-green-500",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    },
    {
      name: "React",
      type: "Dashboard",
      progress: 37,
      color: "bg-cyan-500",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png",
    },
    {
      name: "Bootstrap",
      type: "Website",
      progress: 22,
      color: "bg-purple-600",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
    },
    {
      name: "Sketch",
      type: "Website Design",
      progress: 29,
      color: "bg-orange-500",
      icon: "https://img1.pnghut.com/10/11/23/VBygFm79L0/royaltyfree-yellow-diamond-color-drawing-jewellery.jpg",
    },
  ];

  const transactions = [
    {
      card: "VISA",
      cardIcon: "💳",
      cardBg: "bg-gray-200",
      number: "*4230",
      type: "Credit",
      date: "Sent",
      fullDate: "17 Mar 2022",
      status: "Verified",
      statusColor: "bg-green-100 text-green-800",
      trend: "+$1,678",
      trendColor: "text-green-600",
    },
    {
      card: "MASTER",
      cardIcon: "💳",
      cardBg: "bg-gray-200",
      number: "*5578",
      type: "Credit",
      date: "Sent",
      fullDate: "12 Feb 2022",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
      trend: "-$839",
      trendColor: "text-red-600",
    },
    {
      card: "AMEX",
      cardIcon: "💳",
      cardBg: "bg-gray-200",
      number: "*4567",
      type: "ATM",
      date: "Sent",
      fullDate: "28 Feb 2022",
      status: "Verified",
      statusColor: "bg-green-100 text-green-800",
      trend: "+$435",
      trendColor: "text-green-600",
    },
    {
      card: "VISA",
      cardIcon: "💳",
      cardBg: "bg-gray-200",
      number: "*5699",
      type: "Credit",
      date: "Sent",
      fullDate: "8 Jan 2022",
      status: "Pending",
      statusColor: "bg-gray-100 text-gray-800",
      trend: "+$2,345",
      trendColor: "text-green-600",
    },
    {
      card: "VISA",
      cardIcon: "💳",
      cardBg: "bg-gray-200",
      number: "*5699",
      type: "Credit",
      date: "Sent",
      fullDate: "8 Jan 2022",
      status: "Rejected",
      statusColor: "bg-red-100 text-red-800",
      trend: "-$234",
      trendColor: "text-red-600",
    },
  ];

  const orderData = [
    { name: "Mon", value: 40 },
    { name: "Tue", value: 60 },
    { name: "Wed", value: 20 },
    { name: "Thu", value: 80 },
    { name: "Fri", value: 50 },
    { name: "Sat", value: 30 },
    { name: "Sun", value: 90 },
  ];
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);

      animateValue("revenue", 0, 4673, 2000);
      animateValue("orders", 0, 124, 1500);
      animateValue("sales", 0, 175, 1500);
      animateValue("profit", 0, 1.28, 1500);
      animateValue("totalSales", 0, 24.67, 1500);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const ordersLastWeek = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 60 },
    { day: "Wed", value: 20 },
    { day: "Thu", value: 80 },
    { day: "Fri", value: 50 },
    { day: "Sat", value: 30 },
    { day: "Sun", value: 90 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
  };
  const maxValue = Math.max(...revenueData.map((item) => item.value));

  const renderCustomBar = (props) => {
    const { fill, x, y, width, height, payload } = props;
    const barColor = payload.value === maxValue ? "#28C76F" : "#DDF6E8";

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={barColor}
          rx={8}
          ry={8}
        />
      </g>
    );
  };

  const SalesRadarChartResponsive = ({ data }) => {
    return (
      <ChartContainer
        config={chartConfiga}
        className="w-64 h-64 sm:w-[350px] sm:h-[350px]"
      >
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid stroke="#cac6c6ff" />
          <PolarAngleAxis dataKey="month" />
          <Radar name="Sales" dataKey="sales" stroke="#7367F0" fill="#7367F0" />
          <Radar name="Visit" dataKey="visit" stroke="#00BAD1" fill="#00BAD1" />
        </RadarChart>
      </ChartContainer>
    );
  };

  const chart = useChart();
  return (
    <div className="max-w-7xl mx-auto mt-1 space-y-6">
      <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className="bg-white  rounded-[5px] p-7 "
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-[18px] font-medium text-gray-600">Order</h3>
              <p className="text-[15px] text-gray-500 -mt-1">Last week</p>
            </div>
          </div>

          <div className="mb-2">
            <ChartContainer
              config={{
                value: { label: "Orders", color: "hsl(var(--chart-1))" },
              }}
              className="h-14 w-full" // ✅ use full width of card
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={ordersLastWeek}
                  margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="day"
                    hide
                    tickLine={false}
                    axisLine={false}
                    tickMargin={4}
                  />

                  <Bar
                    dataKey="value"
                    fill="#8b5cf6"
                    radius={[2, 2, 0, 0]}
                    barSize={8}
                    background={{ fill: "#6b7280", opacity: 0.3 }}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium  text-gray-700">124k</div>
            <div className="text-[13px] font-medium text-[#08CB00]">+12.6%</div>
          </div>
        </div>

        <div
          className="bg-white rounded-[5px]  "
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between p-6 items-start ">
            <div>
              <h3 className="text-[18px] font-medium text-gray-600">Sales</h3>
              <p className="text-[15px] font-medium text-gray-500 -mt-1">
                Last Year
              </p>
            </div>
          </div>

          <div className="h-14">
            <ResponsiveContainer width="100%">
              <LineChartComponent data={salesData} />
            </ResponsiveContainer>
          </div>

          <div className="flex p-6 items-center -mt-8 justify-between">
            <div className="text-2xl font-medium text-gray-700">175k</div>
            <div className="text-[13px] font-medium text-red-400">-16.2%</div>
          </div>
        </div>

        <div
          className="bg-white rounded-[5px] p-6 "
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-3">
            <div className="w-11 h-11 bg-[#FFE2E3] opacity-70 rounded-[5px] flex items-center justify-center">
              <IconCreditCard stroke={2} className="w-7 h-7 text-red-600 " />
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-gray-600 -mt-1 ">
              Total Profit
            </h3>
            <p className="text-[15px] text-gray-500 mb-2">Last week</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <div className="text-[15px]   text-gray-600 pb-2">1.28k</div>
                <div className="text-[13px]  bg-red-100  font-medium text-red-500 mt-1 px-2 py-1 rounded">
                  -12.2%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-[5px] p-6 "
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-3">
            <div className="w-11 h-11 bg-[#DDF6E8] opacity-70 rounded-[5px] flex items-center justify-center">
              <IconCreditCard stroke={2} className="w-7 h-7 text-green-600" />
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-gray-600 -mt-1 ">
              Total Sales
            </h3>
            <p className="text-[15px] text-gray-500 mb-2 ">Last week</p>
            <div className="flex flex-col items-start">
              <div className="text-[15px] font-medium badboy text-gray-600 pb-2">
                24.67k
              </div>
              <div className="text-sm bg-green-100  font-medium text-[#08CB00] mt-1 px-2 py-0.5 rounded">
                +24.5%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white  shadow p-6 w-full"
        style={{ borderRadius: "5px" }}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              Earning Reports
            </h3>
            <p className="text-[15px] -mt-2 font-medium text-gray-400">
              Yearly Earnings Overview
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("earningReports")}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            {activeDropdown === "earningReports" && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  View More
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto">
          {[
            { id: "orders", icon: ShoppingCart, label: "Orders" },
            { id: "sales", icon: BarChart3, label: "Sales" },
            { id: "profit", icon: DollarSign, label: "Profit" },
            { id: "income", icon: Clock, label: "Income" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center 
        w-12 h-12 sm:w-28 sm:h-[100px] rounded-[7px] 
        ${
          activeTab === tab.id
            ? "sm:border sm:border-indigo-400"
            : "sm:border sm:border-gray-200 sm:border-dashed hover:bg-gray-100"
        }`}
            >
              {/* Icon */}
              <div
                className={`p-2 rounded 
          ${activeTab === tab.id ? "bg-indigo-100" : "bg-gray-100"}
        `}
              >
                <tab.icon
                  className={`w-6 h-6 
            ${activeTab === tab.id ? "text-indigo-600" : "text-gray-600"}
          `}
                />
              </div>

              {/* Label - hidden on mobile */}
              <span className="hidden sm:block text-[15px] mt-1.5 font-medium text-gray-500 text-center">
                {tab.label}
              </span>
            </button>
          ))}

          {/* Add button */}
          <div className="p-2 -mt-2 rounded mb-1">
            <button
              className="flex flex-col items-center justify-center 
        w-12 h-12 sm:w-28 sm:h-[100px] rounded-[7px] 
        sm:border sm:border-gray-100 sm:border-dashed"
            >
              <div className="p-2 rounded bg-gray-100">
                <Plus className="w-6 h-6 text-gray-300" />
              </div>
            </button>
          </div>
        </div>

        <div className="h-64 w-full overflow-x-auto">
          {/* Chart wrapper with min-width so it expands horizontally */}
          <div className="min-w-[600px] sm:min-w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={earningsData}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                className="opacity-90 text-medium text-[13px]"
              >
                <XAxis
                  dataKey="month"
                  className="text-gray-400 opacity-70"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickCount={6}
                  domain={[0, 50]}
                  ticks={[0, 10, 20, 30, 40, 50]}
                  className="text-gray-400 opacity-70"
                  tickFormatter={(value) => `${value}k`}
                />
                <Bar
                  dataKey={activeTab}
                  shape={<CustomBar />}
                  radius={[6, 6, 0, 0]}
                  barSize={36}
                >
                  <LabelList content={<CustomLabel />} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="bg-white rounded-[5px] p-6 shadow"
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold badboy text-gray-600">
                Sales by Countries
              </h3>
              <p className="text-sm font-medium -mt-2 text-gray-400">
                Monthly Sales Overview
              </p>
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("sales-by-countries")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
              {activeDropdown === "sales-by-countries" && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Download
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Refresh
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {countriesData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-600">
                      {country.amount}
                    </div>
                    <div className="text-sm text-gray-500">
                      {country.country}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-[15px] font-medium flex items-center gap-1 ${
                    country.positive ? "text-[#5AD490] " : "text-red-600"
                  }`}
                >
                  {country.positive ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  {country.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-white rounded-[5px] p-6 shadow"
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold badboy text-gray-600">
                Project Status
              </h3>
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("projects")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
              {activeDropdown === "projects" && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    View More
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 -mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-[5px] flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-500">
                  $
                  {Math.floor(
                    animatedValues.projectEarnings || 0
                  ).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Your Earnings</div>
              </div>
              <div
                className={`ml-auto text-sm font-medium ${
                  projectGrowth >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {projectGrowth >= 0 ? "+" : ""}
                {projectGrowth}%
              </div>
            </div>

            <div className="mt-8 -mb-8">
              <ChartContainer
                config={{
                  earnings: {
                    label: "Earnings",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <LineChart
                  accessibilityLayer
                  data={lineChartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="lineShadowFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#d88313" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#d88313" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={false} />

                  <Area
                    type="linear"
                    dataKey="value"
                    stroke="none"
                    fill="url(#lineShadowFill)"
                    fillOpacity={1}
                  />

                  <Line
                    dataKey="value"
                    type="linear"
                    stroke="#d88313"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-[15px] font-medium">
                Donates
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-[15px] ">$756.26</span>
                <span className="text-red-600 text-sm">-139.34</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-[15px] font-medium">
                Podcasts
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-[15px] ">$2,207.03</span>
                <span className="text-green-600 text-sm">+576.24</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Project with horizontal scroll on mobile */}
        <div className="overflow-x-auto">
          <div
            className="min-w-[320px] bg-white rounded-[5px] shadow p-6"
            style={{ borderRadius: "5px" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="-mb-1">
                <h3 className="text-lg font-semibold badboy -mb-[2px] text-gray-600">
                  Active Project
                </h3>
                <p className="text-sm font-medium text-gray-400">
                  Average 72% Completed
                </p>
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("projects")}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
                {activeDropdown === "projects" && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Refresh
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Download
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      View All
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 sm:space-x-3 p-2 sm:p-1"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-[5px] bg-gray-100 flex items-center justify-center">
                      <img
                        src={project.icon || "/placeholder.svg"}
                        alt={project.name}
                        className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                    <div>
                      <p className="m-0 font-medium text-gray-700 text-lg sm:text-base">
                        {project.name}
                      </p>
                      <p className="m-0 text-sm text-gray-500 hidden sm:block">
                        {project.type}{" "}
                        {/* hidden on mobile, shown on sm and up */}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-2 sm:mt-0">
                    {/* Progress Bar */}
                    <div className="w-full sm:w-4/5 bg-gray-200 rounded-full h-3 sm:h-2">
                      <div
                        className={`h-3 sm:h-2 rounded-full ${project.color}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>

                    {/* Progress Text */}
                    <span className="text-sm font-medium text-gray-600 w-full sm:w-1/5 text-right mt-1 sm:mt-0">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-[5px] shadow  p-6"
          style={{ borderRadius: "5px" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold badboy text-gray-600">
              Last Transaction
            </h3>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("transactions")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
              {activeDropdown === "transactions" && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Download
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Refresh
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="border-b border-t border-gray-200">
                  <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CARD
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STATUS
                  </th>
                  <th className="text-right py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TREND
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50 ">
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-6 ${transaction.cardBg} rounded flex items-center justify-center`}
                        >
                          <span className="inline-block w-6">
                            {transaction.card === "VISA" && (
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                                alt="VISA"
                                className="w-full h-full object-contain"
                              />
                            )}
                            {transaction.card === "MASTER" && (
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
                                alt="MasterCard"
                                className="w-full h-full object-contain"
                              />
                            )}
                            {transaction.card === "AMEX" && (
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlheKijtQvjBwdn0LbzC-E7cu0EhLyZbAyg&s"
                                alt="Amex"
                                className="w-full h-full object-contain"
                              />
                            )}
                          </span>
                        </div>
                        <div>
                          <p className="m-0 text-sm font-medium text-gray-600">
                            {transaction.number}
                          </p>
                          <p className="m-0 text-xs text-gray-500">
                            {transaction.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2">
                      <div>
                        <p className="m-0 text-sm text-gray-700">
                          {transaction.date}
                        </p>
                        <p className="m-0 text-xs text-gray-500">
                          {transaction.fullDate}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-2">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${transaction.statusColor}`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-2 px-2 text-right">
                      <span
                        className={`text-sm font-medium ${transaction.trendColor}`}
                      >
                        {transaction.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md p-4 sm:p-6 shadow">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <IconListDetails stroke={2} className="w-5 h-5 text-gray-600" />
            <span className="text-lg font-semibold mt-1 md:mt-0 text-gray-700 leading-none">
              Activity Timeline
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("activity")}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            {activeDropdown === "activity" && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Download
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Refresh
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Share
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Activity Items */}
        <div className="space-y-6">
          {activities.map((activity, idx) => (
            <div key={activity.id} className="flex gap-4">
              {/* Timeline Indicator */}
              <div className="relative flex flex-col items-center min-h-[20px]">
                {/* vertical line (only if not last item) */}
                {idx !== activities.length && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px bg-gray-300 h-full" />
                )}
                {/* dot */}
                <div
                  className="w-3 h-3 rounded-full z-10 mt-1"
                  style={{ backgroundColor: activity.color }}
                />
              </div>

              {/* Activity Content */}
              <div className="flex-1 w-full -ml-2 sm:ml-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1 mt-12 md:mt-0">
  <h4 className="text-[15px] sm:text-base font-medium text-gray-500">
    {activity.title}
  </h4>
  <span className="text-xs text-gray-400 -mt-2 md:mt-0">
    {activity.time}
  </span>
</div>


                <p className="text-[13px] sm:text-[15px] font-medium badboy text-gray-400 mb-2">
                  {activity.description}
                </p>

                {activity.file && (
                  <div className="inline-flex items-center gap-2 bg-gray-100 text-xs sm:text-sm rounded px-2 py-1 mb-2">
                    <FileText className="w-4 h-4 text-red-400" />
                    <span className="text-gray-600 font-medium">
                      {activity.file}
                    </span>
                  </div>
                )}

                {activity.user && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGOEOhBv69Qnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732119841139?e=2147483647&v=beta&t=Q26v2UHMS6whoDJ28jTVDIVR01JsBKOyTF9X_cVaVpE"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">
                        {activity.user}
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.role}
                      </div>
                    </div>
                  </div>
                )}

                {activity.teamCount && (
                  <div className="flex items-center gap-2 overflow-x-auto">
                    <div className="flex -space-x-2">
                      {/* avatars */}
                      <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="User 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="User 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/men/76.jpg"
                          alt="User 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-medium">
                        {activity.teamCount}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sales Box */}
        <div
          className="bg-white rounded-[5px] shadow w-full md:w-[350px] p-4 md:p-0"
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-4 md:mb-6  ">
            <div>
              <h3 className="text-lg font-semibold badboy text-gray-600">
                Sales
              </h3>
              <p className="text-sm text-gray-500 -mt-1">Last 6 Months</p>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("salesDrone")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
              {activeDropdown === "salesDrone" && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    View More
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="w-full flex ml-[20px] md:ml-[30px] -mt-12 bfs ">
            <SalesRadarChartResponsive data={chartData} />
          </div>

          {/* Legend */}
          <div className="flex ml-[120px] md:mb-[25px] md:-mt-4 md:ml-[150px] gap-6  ">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#7367F0] rounded-full"></div>
              <span className="text-sm text-gray-600">Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Visits</span>
            </div>
          </div>
        </div>

        {/* Revenue Growth Box */}
        <div
          className="bg-white rounded-[5px] shadow z-10 w-full md:w-[450px] p-4 md:p-6 h-[280px] md:h-[200px]"
          style={{ borderRadius: "5px" }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold badboy text-gray-600">
                Revenue Growth
              </h3>
              <p className="text-sm text-gray-500">Weekly Report</p>
            </div>

            <div className="w-full md:w-[220px] h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={revenueData}>
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <Bar dataKey="value" shape={renderCustomBar} />
                </RechartsBarChart>
              </ResponsiveContainer>

              <div className="flex justify-between text-[10px] text-gray-500 mt-1 px-0.5">
                {revenueData.map((item, index) => (
                  <span key={index} className="w-[calc(100%/7)] text-center">
                    {item.day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:-mt-6">
            <div className="text-2xl font-medium  text-gray-700">
              ${revenueAmount.toLocaleString()}
            </div>
            <div
              className={`inline-block text-sm font-medium px-2 py-1 rounded mt-1 ${
                revenueGrowth >= 0
                  ? "text-[#28C76F] bg-[#E6F9F0]"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {revenueGrowth >= 0 ? "+" : ""}
              {revenueGrowth}%
            </div>
          </div>
        </div>
      </div>

      <div className="-mb-8">
        <Footer />
      </div>
    </div>
  );
};
