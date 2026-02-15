import { Link2, Eye, Radio, Cpu, BarChart3 } from "lucide-react"

function Badge({
  className = "",
  children,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: string }) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
  const variants: Record<string, string> = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    outline: "text-foreground",
  }
  return (
    <div className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </div>
  )
}

function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardDescription({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

const stages = [
  {
    number: 1,
    title: "TFD Preparation",
    subtitle: "ER Bridge",
    icon: Link2,
    description: "Creates Einstein-Rosen bridge using Thermofield Double state",
    details: [
      { label: "Gates", value: "H → RY(θ_lock) → CX" },
      { label: "Qubits", value: "50 entangled pairs (L ↔ R)" },
      { label: "Constant", value: "θ_lock = 51.843°" },
    ],
  },
  {
    number: 2,
    title: "Quantum Zeno Monitoring",
    subtitle: "State Freeze",
    icon: Eye,
    description: "Stroboscopic weak measurements freeze the wormhole state",
    details: [
      { label: "Rate", value: "κ = 1 MHz" },
      { label: "Cycles", value: "100 measurement cycles" },
      { label: "Gates", value: "CRY + MEASURE + RESET" },
    ],
  },
  {
    number: 3,
    title: "Floquet Drive",
    subtitle: "Pilot-Wave Injection",
    icon: Radio,
    description: "Periodic modulation keeps the wormhole traversable",
    details: [
      { label: "Frequency", value: "1 GHz microwave" },
      { label: "Amplitude", value: "0.5 rad" },
      { label: "Throat", value: "10 qubits at L-R boundary" },
    ],
  },
  {
    number: 4,
    title: "Dynamic Feed-Forward",
    subtitle: "Real-Time Correction",
    icon: Cpu,
    description: "Classical corrections based on mid-circuit measurements",
    details: [
      { label: "Latency", value: "<300ns" },
      { label: "Gates", value: "X (bit flip) + RZ(θ_lock)" },
      { label: "Mode", value: "Real-time feedback" },
    ],
  },
  {
    number: 5,
    title: "Full Readout",
    subtitle: "Measurement",
    icon: BarChart3,
    description: "Final measurement on all 120 qubits",
    details: [
      { label: "Shots", value: "100,000" },
      { label: "Precision", value: "High statistics" },
      { label: "Output", value: "All 120 qubits" },
    ],
  },
]

export function StagesSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Five-Stage Protocol</h2>
          <p className="text-muted-foreground">
            Sequential quantum operations for wormhole stabilization
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <Card key={stage.number} className="quantum-border">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <Badge variant="secondary" className="h-8 w-8 justify-center rounded-full p-0">
                    {stage.number}
                  </Badge>
                  <stage.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{stage.title}</CardTitle>
                <CardDescription className="text-accent">{stage.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{stage.description}</p>
                <div className="space-y-2">
                  {stage.details.map((detail) => (
                    <div key={detail.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{detail.label}</span>
                      <span className="font-mono text-foreground">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
