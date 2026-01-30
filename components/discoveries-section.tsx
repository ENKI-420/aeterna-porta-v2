import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Grid3X3, ArrowLeftRight, Sparkles } from "lucide-react"

const discoveries = [
  {
    title: "Negative Shapiro Delay",
    formula: "Δt < 0",
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
    formula: "S₂(A) ≈ c·|∂A|",
    icon: Grid3X3,
    description: "Entanglement concentrated at the event horizon (holographic principle)",
    metrics: [
      { label: "Scaling", value: "Area, not volume" },
      { label: "Boundary", value: "∂A horizon" },
      { label: "Constant", value: "c coefficient" },
    ],
    significance: "p = 0.012",
    color: "text-accent",
  },
  {
    title: "Non-Reciprocal Flow",
    formula: "J_LR/J_RL ≠ 1",
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
    formula: "Ξ = (Λ × Φ) / Γ",
    icon: Sparkles,
    description: "Quantum wormhole outperforms classical copper wire by 127x",
    metrics: [
      { label: "Baseline Ξ", value: "3.6" },
      { label: "Zeno Ξ", value: "127.4" },
      { label: "Improvement", value: "35× gain" },
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
                      <code className={`text-sm font-mono ${discovery.color}`}>
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
