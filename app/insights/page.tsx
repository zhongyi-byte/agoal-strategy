"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronDown,
  Download,
  Filter,
  LineChart,
  Radar,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Radar className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">战略雷达</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              首页
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              仪表盘
            </Link>
            <Link href="/insights" className="text-sm font-medium text-primary">
              战略洞察
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              设置
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <img src="/placeholder.svg?height=32&width=32" alt="Avatar" className="h-8 w-8 rounded-full" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">战略洞察</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              筛选
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button size="sm" className="h-9">
              <Download className="mr-2 h-4 w-4" />
              导出报告
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">战略洞察总数</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">36</div>
              <p className="text-xs text-muted-foreground">+8 较上周</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">高优先级洞察</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 较上周</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">已采纳建议</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+5 较上周</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">OKR调整建议</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+6 较上周</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">全部洞察</TabsTrigger>
              <TabsTrigger value="high">高优先级</TabsTrigger>
              <TabsTrigger value="market">市场相关</TabsTrigger>
              <TabsTrigger value="competitor">竞争对手</TabsTrigger>
              <TabsTrigger value="policy">政策法规</TabsTrigger>
            </TabsList>
            <div className="relative w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="搜索洞察..." className="w-full pl-8" />
            </div>
          </div>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">竞争对手产品策略应对</h3>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          竞争对手A公司的新产品线将在下季度推出，采用AI驱动技术，直接威胁我们的市场份额目标。
                        </p>
                        <div className="rounded-md bg-muted p-3 mt-4">
                          <h4 className="font-medium mb-2">战略洞察</h4>
                          <p className="text-sm text-muted-foreground">
                            竞争对手的新产品主要针对企业市场，其AI技术可能在数据处理效率和用户体验方面领先。然而，我们在数据安全和行业定制化方面仍有优势。市场研究显示客户对实时数据分析需求增长，这与我们当前产品优势匹配。
                          </p>
                        </div>
                        <div className="rounded-md bg-primary/5 p-3 mt-2">
                          <h4 className="font-medium mb-2">行动建议</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>加速当前产品路线图中的实时数据分析功能开发，提前至下月发布</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>调整市场营销策略，强调我们在数据安全和行业定制化方面的优势</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>启动针对现有客户的忠诚度计划，降低客户流失风险</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">影响OKR: O1, O2</Badge>
                          <Badge variant="outline">竞争分析</Badge>
                          <Badge variant="outline">产品策略</Badge>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            标记为已处理
                          </Button>
                          <Button size="sm">采纳建议</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">政策合规调整策略</h3>
                          <Badge>中优先级</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          新的行业合规要求将于明年Q1生效，需要调整产品功能和数据处理流程。
                        </p>
                        <div className="rounded-md bg-muted p-3 mt-4">
                          <h4 className="font-medium mb-2">战略洞察</h4>
                          <p className="text-sm text-muted-foreground">
                            新政策主要关注数据隐私和处理透明度，这与行业整体趋势一致。尽管合规调整可能短期影响用户体验，但长期有利于建立客户信任，并可能成为我们的差异化优势。
                          </p>
                        </div>
                        <div className="rounded-md bg-primary/5 p-3 mt-2">
                          <h4 className="font-medium mb-2">行动建议</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>成立跨部门合规工作组，优先评估产品调整需求</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>将合规调整与用户体验优化结合，减少对客户满意度的负面影响</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>开发合规相关营销材料，将合规转化为市场竞争优势</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">影响OKR: O3</Badge>
                          <Badge variant="outline">政策法规</Badge>
                          <Badge variant="outline">合规</Badge>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            标记为已处理
                          </Button>
                          <Button size="sm">采纳建议</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <LineChart className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">市场需求趋势利用策略</h3>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          最新市场研究显示，客户对实时数据分析和可视化需求大幅增长，这与我们当前产品路线图高度吻合。
                        </p>
                        <div className="rounded-md bg-muted p-3 mt-4">
                          <h4 className="font-medium mb-2">战略洞察</h4>
                          <p className="text-sm text-muted-foreground">
                            实时数据分析需求增长是我们扩大市场份额的重要机会。我们当前产品在这一领域有技术积累，但尚未充分市场化。竞争对手尚未在此领域形成明显优势，我们有机会抢占先机。
                          </p>
                        </div>
                        <div className="rounded-md bg-primary/5 p-3 mt-2">
                          <h4 className="font-medium mb-2">行动建议</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>将实时数据分析功能作为产品核心卖点，调整营销信息</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>开发针对不同行业的实时数据分析案例和最佳实践</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowUpRight className="h-4 w-4 text-primary mt-0.5" />
                              <span>与销售团队合作，针对现有客户开发实时数据分析的升级方案</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">影响OKR: O1, O3</Badge>
                          <Badge variant="outline">市场趋势</Badge>
                          <Badge variant="outline">产品策略</Badge>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            标记为已处理
                          </Button>
                          <Button size="sm">采纳建议</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">加载更多</Button>
                <Button>生成综合报告</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="high" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">竞争对手产品策略应对</h3>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          竞争对手A公司的新产品线将在下季度推出，采用AI驱动技术，直接威胁我们的市场份额目标。
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">影响OKR: O1, O2</Badge>
                          <Badge variant="outline">竞争分析</Badge>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            查看详情
                          </Button>
                          <Button size="sm">采纳建议</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <LineChart className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">市场需求趋势利用策略</h3>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          最新市场研究显示，客户对实时数据分析和可视化需求大幅增长，这与我们当前产品路线图高度吻合。
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">影响OKR: O1, O3</Badge>
                          <Badge variant="outline">市场趋势</Badge>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            查看详情
                          </Button>
                          <Button size="sm">采纳建议</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <LineChart className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">市场需求趋势利用策略</h3>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          最新市场研究显示，客户对实时数据分析和可视化需求大幅增长，这与我们当前产品路线图高度吻合。
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">影响OKR: O1, O3</Badge>
                          <Badge variant="outline">市场趋势</Badge>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            查看详情
                          </Button>
                          <Button size="sm">采纳建议</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

