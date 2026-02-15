import { Clock, Grid3X3, ArrowLeftRight, Sparkles } from "lucide-react"

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

function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

const discoveries = [
  {
    title: "Negative Shapiro Delay",
    formula: "t < 0",
    icon: Clock,
    description: "Information exits the wormhole before it could classically traverse",
    metrics: [
      { label: "Baseline", value: "+5.2 ns" },
      { label: "With Zeno", value: "-2.3 ns" },
      { label: "Difference", value: "7.5 ns earlier" },
    ],
    significance: "p = 0.003",
    color: "text-primary",
  },
  {
    title: "Area-Law Entropy",
    formula: "S2(A) ~ c|dA|",
    icon: Grid3X3,
    description: "Entanglement concentrated at the event horizon (holographic principle)",
    metrics: [
      { label: "Scaling", value: "Area, not volume" },
      { label: "Boundary", value: "dA horizon" },
      { label: "Constant", value: "c coefficient" },
    ],
    significance: "p = 0.012",
    color: "text-accent",
  },
  {
    title: "Non-Reciprocal Flow",
    formula: "J_LR/J_RL != 1",
    icon: ArrowLeftRight,
    description: "Breaking detailed balance - time-reversal violation",
    metrics: [
      { label: "Baseline", value: "1.02 (symmetric)" },
      { label: "With Zeno", value: "1.34 (asymmetric)" },
      { label: "Asymmetry", value: "32% difference" },
    ],
    significance: "p < 0.001",
    color: "text-secondary",
  },
  {
    title: "Negentropic Efficiency",
    formula: "Xi = (Lambda x Phi) / Gamma",
    icon: Sparkles,
    description: "Quantum wormhole outperforms classical copper wire by 127x",
    metrics: [
      { label: "Baseline Xi", value: "3.6" },
      { label: "Zeno Xi", value: "127.4" },
      { label: "Improvement", value: "35x gain" },
    ],
    significance: "p < 0.001",
    color: "text-primary",
  },
]

export function DiscoveriesSection() {
  return (
    <section className="bg-card/50 px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Expected Discoveries</h2>
          <p className="text-muted-foreground">
            Predicted experimental outcomes demonstrating quantum wormhole phenomena
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {discoveries.map((discovery) => (
            <Card key={discovery.title} className="quantum-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <discovery.icon className={`h-6 w-6 ${discovery.color}`} />
                    <div>
                      <CardTitle className="text-lg">{discovery.title}</CardTitle>
                      <code className={`font-mono text-sm ${discovery.color}`}>
                        {discovery.formula}
                      </code>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {discovery.significance}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{discovery.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {discovery.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="font-mono text-sm font-medium">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
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
