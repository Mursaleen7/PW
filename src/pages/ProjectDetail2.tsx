"use client"
import React, { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { Layout, ListFilter, Calendar, Clock, CheckSquare, Code, Cpu, Upload, Zap, CheckCircle2 } from "lucide-react"

// Tailwind CSS configuration
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      colors: {
        "github-text": {
          light: "#24292f",
          DEFAULT: "#c9d1d9",
        },
        "github-bg": {
          light: "#ffffff",
          DEFAULT: "#0d1117",
        },
        "github-border": {
          light: "#d0d7de",
          DEFAULT: "#30363d",
        },
        "github-secondary": {
          light: "#f6f8fa",
          DEFAULT: "#161b22",
        },
        "github-accent": {
          light: "#0969da",
          DEFAULT: "#58a6ff",
        },
        "github-success": {
          light: "#1a7f37",
          DEFAULT: "#238636",
        },
        "github-warning": {
          light: "#9a6700",
          DEFAULT: "#9e6a03",
        },
      },
    },
  },
  plugins: [],
}

const ProjectDescription: React.FC = React.memo(() => (
  <div className="prose prose-sm max-w-none text-github-text-light dark:text-github-text">
    <h2 className="text-2xl font-semibold mb-4">Fraud Email Detection: An Intelligent Anti-Fraud Solution</h2>

    <p className="mb-4">
      This project started as a small, personal initiative when I noticed a growing problem: fraudulent emails are increasingly
      causing financial losses and data breaches for individuals and businesses. Many still rely on outdated spam filters or manual
      screening, but by the time a scam is identified, the damage is often done.
    </p>

    <div className="bg-github-secondary-light dark:bg-github-secondary p-4 rounded-md my-6 border border-github-border-light dark:border-github-border">
      <h3 className="text-lg font-semibold mb-3">Project Goals</h3>
      <p className="mb-3">
        Existing solutions often require expensive enterprise subscriptions, complex configurations, or specialized hardware—resources
        that aren’t always available to small businesses and individual users. I wanted to build something that was:
      </p>
      <ul className="list-none pl-0 space-y-2">
        <li className="flex items-center">
          <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
          <span>Free to use</span>
        </li>
        <li className="flex items-center">
          <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
          <span>Lightweight and accessible on any device</span>
        </li>
        <li className="flex items-center">
          <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
          <span>Capable of running locally without relying on cloud servers</span>
        </li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>
    <p className="mb-4">
      The system is designed to help users quickly detect fraudulent emails using advanced AI algorithms. The process is simple:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Upload className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Process Flow</h4>
        </div>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Forward or upload the suspicious email.</li>
          <li>The system extracts content and metadata.</li>
          <li>AI algorithms analyze the email for fraud indicators.</li>
          <li>Receive an instant risk score and actionable recommendations.</li>
        </ol>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Zap className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Key Features</h4>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Real-time fraud detection – Quickly identifies phishing and scam emails.</li>
          <li>Customizable filtering – Adjust sensitivity based on user needs.</li>
          <li>Integration ready – Easily connects with popular email platforms.</li>
          <li>User-friendly interface – Simplified dashboard for both tech-savvy and non-technical users.</li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">Technical Details</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Code className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Development Stack</h4>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Backend: Flask (handles email submissions and model predictions)</li>
          <li>Frontend: HTML, CSS (simple yet effective UI)</li>
          <li>Programming Language: Python</li>
          <li>Machine Learning Libraries: TensorFlow, Keras, scikit-learn</li>
          <li>Data Storage: Local file system (ensures data privacy)</li>
        </ul>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Cpu className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Deep Learning Model</h4>
        </div>
        <h5 className="font-medium mb-2">Architecture:</h5>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li>Embedding layer for text representation</li>
          <li>Bidirectional LSTM layers for sequence analysis</li>
          <li>Attention mechanism for key phrase extraction</li>
          <li>Fully connected layers with ReLU activations</li>
          <li>Softmax output layer for classification</li>
        </ul>
        <h5 className="font-medium mb-2">Accuracy:</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>Phishing: 98.5%</li>
          <li>Scam: 97.2%</li>
          <li>Spam: 96.0%</li>
          <li>Legitimate: 99.0%</li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">Building & Testing the System</h3>
    <p className="mb-3">
      Since this project was built on a small scale, I didn’t have access to enterprise-level resources or high-performance servers.
      Instead, I trained the models on a local machine using datasets collected from open-source email repositories and public phishing databases.
    </p>
    <p className="mb-3">
      For testing, I collaborated with several small businesses and individual users who forwarded suspicious emails. Their feedback
      was invaluable in refining the model and improving detection accuracy.
    </p>
    <p className="mb-3">
      One notable case involved a small business that detected a sophisticated phishing attack early, preventing a potential data breach
      and saving significant resources.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-3">Challenges & Solutions</h3>
    <div className="space-y-4 mt-4">
      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <h4 className="font-semibold mb-2">1. Lack of High-Quality Data</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>The biggest challenge was sourcing verified, diverse email datasets that reflect real-world fraudulent behavior.</li>
          <li>
            I addressed this by aggregating data from multiple public sources and employing data augmentation techniques.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <h4 className="font-semibold mb-2">2. Handling High Volume</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Processing large volumes of emails in real-time on limited hardware posed a significant challenge.</li>
          <li>
            I optimized the algorithms for speed and efficiency, ensuring prompt risk assessments without sacrificing accuracy.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <h4 className="font-semibold mb-2">3. User Adoption & Accessibility</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Many users are not comfortable with complex cybersecurity tools.</li>
          <li>
            I designed the interface to be intuitive with clear instructions, so anyone can use it without prior technical expertise.
          </li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">Current Status & Future Plans</h3>
    <p className="mb-3">
      Right now, the system is in its early stages but fully functional. The next steps include:
    </p>
    <ul className="list-none pl-0 space-y-2 mb-4">
      <li className="flex items-center">
        <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
        <span>Integrating with major email providers for seamless usage</span>
      </li>
      <li className="flex items-center">
        <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
        <span>Adding advanced filtering options for personalized protection</span>
      </li>
      <li className="flex items-center">
        <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
        <span>Refining the model with more diverse email datasets</span>
      </li>
    </ul>
    <p>
      The goal isn’t to replace professional cybersecurity solutions but to offer an accessible first line of defense against fraudulent emails.
    </p>
  </div>
))

interface Task {
  id: number
  title: string
  status: string
  assignee: string
  description: string
  dueDate: string
  progress: string
}

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = React.memo(({ task }) => (
  <div className="p-3 hover:bg-github-secondary-light dark:hover:bg-github-secondary transition-colors">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-github-text-light dark:text-github-text font-semibold">{task.title}</h3>
        <p className="text-sm text-[#57606a] dark:text-[#8b949e] mt-1">Assigned to: {task.assignee}</p>
      </div>
      <span
        className={`px-2 py-[3px] text-xs font-medium rounded-full ${
          task.status === "Completed"
            ? "bg-[#dafbe1] dark:bg-[#238636] text-github-success-light dark:text-github-bg-light"
            : task.status === "In Progress"
              ? "bg-[#ddf4ff] dark:bg-[#388bfd26] text-github-accent-light dark:text-github-accent"
              : task.status === "In Review"
                ? "bg-[#fff8c5] dark:bg-[#9e6a03] text-github-warning-light dark:text-github-bg-light"
                : "bg-github-secondary-light dark:bg-github-secondary text-[#57606a] dark:text-[#8b949e]"
        }`}
      >
        {task.status}
      </span>
    </div>
    <div className="mt-2 text-sm text-[#57606a] dark:text-[#8b949e]">{task.description}</div>
    <div className="mt-3 flex items-center space-x-4 text-xs text-[#57606a] dark:text-[#8b949e]">
      <span className="flex items-center">
        <Calendar className="w-3 h-3 mr-1" />
        {task.status === "Completed" ? "Completed" : "Due"} {task.dueDate}
      </span>
      <span className="flex items-center">
        <CheckSquare className="w-3 h-3 mr-1" />
        {task.status === "Completed" ? "100%" : task.progress}
      </span>
    </div>
  </div>
))

interface Project {
  name: string
  status: string
  progress: number
  dueDate: string
  tasks: Task[]
  views: string[]
}

const ProjectDetail2: React.FC = () => {
  const { name } = useParams<{ name?: string }>()
  const displayName = name ? name.replace(/-/g, " ") : "Fraud Email Detection AI"

  const project: Project = useMemo(
    () => ({
      name: displayName,
      status: "In Development",
      progress: 75,
      dueDate: "2024-12-31",
      tasks: [
        {
          id: 1,
          title: "Integrate with Email Providers",
          status: "In Progress",
          assignee: "Alex Chen",
          description: "Develop APIs and plugins for Gmail, Outlook, and other popular email platforms.",
          dueDate: "Dec 2024",
          progress: "60%",
        },
        {
          id: 2,
          title: "Enhance UI for Accessibility",
          status: "In Review",
          assignee: "Sarah Kim",
          description: "Improve the user interface for non-technical users and ensure seamless navigation.",
          dueDate: "Oct 2024",
          progress: "90%",
        },
        {
          id: 3,
          title: "Expand Email Dataset",
          status: "In Progress",
          assignee: "David Brown",
          description: "Collect and label additional emails from public sources to improve model accuracy.",
          dueDate: "Dec 2024",
          progress: "40%",
        },
      ],
      views: ["Board", "Table", "Timeline"],
    }),
    [displayName],
  )

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans text-[14px] leading-[1.5] text-github-text-light dark:text-github-text bg-github-bg-light dark:bg-github-bg">
      {/* Project Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <h1 className="text-[26px] font-semibold leading-[1.25]">{project.name}</h1>
            <span className="px-2 py-[3px] text-xs font-medium rounded-full bg-[#ddf4ff] dark:bg-[#388bfd26] text-github-accent-light dark:text-github-accent border border-[#54aeff66] dark:border-[#388bfd66]">
              {project.status}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {project.views.map((view) => (
              <button
                key={view}
                className="px-3 py-[5px] text-sm font-medium bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-github-text border border-github-border-light dark:border-github-border rounded-md hover:bg-github-border-light dark:hover:bg-github-border transition-colors flex items-center"
              >
                <Layout className="h-4 w-4 mr-2" />
                {view}
              </button>
            ))}
          </div>
        </div>
        <ProjectDescription />
        <div className="flex items-center space-x-4 text-[#57606a] dark:text-[#8b949e] mt-4 text-sm">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Due: {project.dueDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Progress: {project.progress}%
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="border-b border-github-border-light dark:border-github-border mb-4">
        <nav className="flex space-x-4">
          <Link
            to="#overview"
            className="px-3 py-2 border-b-2 border-github-accent-light dark:border-github-accent text-github-text-light dark:text-github-text font-semibold flex items-center"
          >
            <Layout className="w-4 h-4 mr-2" />
            Overview
          </Link>
          <Link
            to="#tasks"
            className="px-3 py-2 text-[#57606a] dark:text-[#8b949e] hover:text-github-text-light dark:hover:text-github-text flex items-center"
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            Tasks
          </Link>
        </nav>
      </div>

      {/* Tasks Section */}
      <div className="border border-github-border-light dark:border-github-border rounded-md overflow-hidden mt-6">
        <div className="bg-github-secondary-light dark:bg-github-secondary p-3 border-b border-github-border-light dark:border-github-border flex justify-between items-center">
          <h2 className="text-github-text-light dark:text-github-text font-semibold">Implementation Tasks</h2>
          <button className="px-3 py-[5px] text-sm font-medium bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-github-text border border-github-border-light dark:border-github-border rounded-md hover:bg-github-border-light dark:hover:bg-github-border transition-colors flex items-center">
            <ListFilter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        <div className="divide-y divide-github-border-light dark:divide-github-border">
          {project.tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail2
