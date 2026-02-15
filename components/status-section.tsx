import { CheckCircle2, FileCode, Terminal, BookOpen } from "lucide-react"

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

const files = [
  {
    name: "deploy_aeterna_porta_v2_ibm_nighthawk.py",
    purpose: "Main deployment script",
    icon: FileCode,
  },
  {
    name: "QUICK_DEPLOY.sh",
    purpose: "Interactive deployment wrapper",
    icon: Terminal,
  },
  {
    name: "deploy_aeterna_porta_v2_SWEEP.py",
    purpose: "Parameter sweep deployment",
    icon: FileCode,
  },
  {
    name: "DEPLOYMENT_STATUS.md",
    purpose: "System verification summary",
    icon: BookOpen,
  },
]

const requirements = [
  "IBM Quantum Account with valid token",
  "ibm_fez backend access (156 qubits)",
  "Python 3.10+ with qiskit-ibm-runtime",
  "Network connectivity for job submission",
]

export function StatusSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <CheckCircle2 className="mr-1.5 h-3 w-3" />
            System Ready
          </Badge>
          <h2 className="mb-4 text-3xl font-bold">Deployment Status</h2>
          <p className="text-muted-foreground">
            {"Framework: dna::{}{} ::lang v51.843"}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="quantum-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                Project Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {files.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <file.icon className="h-4 w-4 text-muted-foreground" />
                      <code className="text-sm">{file.name}</code>
                    </div>
                    <span className="text-xs text-muted-foreground">{file.purpose}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="quantum-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requirements.map((req) => (
                  <div key={req} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-muted/50 p-4">
                <p className="mb-2 text-sm font-medium">Quick Start Command</p>
                <code className="block rounded bg-background px-3 py-2 font-mono text-sm text-primary">
                  ~/.osiris/quantum/QUICK_DEPLOY.sh
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Circuit partition: L=50q, R=50q, Anc=20q | Total: 120 qubits | Backend: ibm_fez
          </p>
        </div>
      </div>
    </section>
  )
}
