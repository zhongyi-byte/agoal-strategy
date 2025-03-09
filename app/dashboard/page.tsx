"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronDown,
  Filter,
  LineChart,
  MoreHorizontal,
  Radar,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardPage() {
  const [_, setActiveTab] = useState("overview")

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
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              仪表盘
            </Link>
            <Link
              href="/insights"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
          <h2 className="text-3xl font-bold tracking-tight">仪表盘</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              筛选
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button size="sm" className="h-9">
              <TrendingUp className="mr-2 h-4 w-4" />
              生成报告
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">总览</TabsTrigger>
            <TabsTrigger value="intelligence">情报中心</TabsTrigger>
            <TabsTrigger value="okr">OKR关联</TabsTrigger>
            <TabsTrigger value="insights">战略洞察</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">监测信息总量</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+20.1% 较上月</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">高优先级警报</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 较昨日</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">OKR影响分析</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+12.5% 较上周</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">战略洞察</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">36</div>
                  <p className="text-xs text-muted-foreground">+8 较上周</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>战略洞察摘要</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <img src="/placeholder.svg?height=300&width=600" alt="Chart" className="w-full" />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>OKR影响热图</CardTitle>
                  <CardDescription>外部因素对关键目标的影响程度</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg?height=300&width=400" alt="OKR Impact Heatmap" className="w-full" />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>最新战略洞察</CardTitle>
                  <CardDescription>基于最新情报的战略分析和建议</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">竞争对手产品策略调整</h4>
                          <Badge variant="outline">高优先级</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          主要竞争对手A公司宣布将在下季度推出新一代产品，采用全新技术架构，可能对我们的市场份额产生重大影响。
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">产品战略</Badge>
                          <Badge variant="secondary">竞争分析</Badge>
                          <span className="text-xs text-muted-foreground">2小时前</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">行业政策变化</h4>
                          <Badge variant="outline">中优先级</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          监管机构发布新的行业合规要求，将于明年Q1生效。这可能需要我们调整产品功能和数据处理流程。
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">政策法规</Badge>
                          <Badge variant="secondary">合规</Badge>
                          <span className="text-xs text-muted-foreground">1天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    查看全部洞察
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>OKR目标状态</CardTitle>
                  <CardDescription>关键目标完成进度与外部影响</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">市场份额增长</span>
                          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                            受影响
                          </Badge>
                        </div>
                        <span className="text-sm">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">产品创新</span>
                          <Badge variant="outline" className="text-red-500 border-red-500">
                            高风险
                          </Badge>
                        </div>
                        <span className="text-sm">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">客户满意度</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            稳定
                          </Badge>
                        </div>
                        <span className="text-sm">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">收入增长</span>
                          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                            受影响
                          </Badge>
                        </div>
                        <span className="text-sm">51%</span>
                      </div>
                      <Progress value={51} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    查看详细OKR分析
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="intelligence" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>情报中心</CardTitle>
                <CardDescription>监测和分析与公司战略相关的外部信息</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="搜索情报..." className="w-full pl-8" />
                    </div>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="信息类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部类型</SelectItem>
                      <SelectItem value="market">市场趋势</SelectItem>
                      <SelectItem value="competitor">竞争对手</SelectItem>
                      <SelectItem value="policy">政策法规</SelectItem>
                      <SelectItem value="technology">技术创新</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="high">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="优先级" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部优先级</SelectItem>
                      <SelectItem value="high">高优先级</SelectItem>
                      <SelectItem value="medium">中优先级</SelectItem>
                      <SelectItem value="low">低优先级</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">竞争对手A公司宣布新产品线</h4>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          竞争对手A公司今日宣布将在下季度推出全新产品线，采用AI驱动的技术架构，针对企业市场。这可能对我们的市场份额和产品策略产生重大影响。
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">竞争对手</Badge>
                          <Badge variant="outline">产品创新</Badge>
                          <span>来源: 行业媒体X</span>
                          <span>2小时前</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
                          OKR影响: 高
                        </Badge>
                        <span className="text-xs text-muted-foreground">影响3个关键目标</span>
                      </div>
                      <Button size="sm" variant="outline">
                        查看分析
                        <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">行业监管新政策发布</h4>
                          <Badge>中优先级</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          监管机构发布新的行业合规要求，将于明年Q1生效。这可能需要我们调整产品功能和数据处理流程，以确保合规。
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">政策法规</Badge>
                          <Badge variant="outline">合规</Badge>
                          <span>来源: 官方公告</span>
                          <span>1天前</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                          OKR影响: 中
                        </Badge>
                        <span className="text-xs text-muted-foreground">影响2个关键目标</span>
                      </div>
                      <Button size="sm" variant="outline">
                        查看分析
                        <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">市场需求趋势变化</h4>
                          <Badge>高优先级</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          最新市场研究显示，客户对实时数据分析和可视化需求大幅增长，这与我们当前产品路线图高度吻合，可能是扩大市场份额的机会。
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">市场趋势</Badge>
                          <Badge variant="outline">客户需求</Badge>
                          <span>来源: 行业报告</span>
                          <span>3天前</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                          OKR影响: 积极
                        </Badge>
                        <span className="text-xs text-muted-foreground">影响2个关键目标</span>
                      </div>
                      <Button size="sm" variant="outline">
                        查看分析
                        <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">加载更多</Button>
                <Button>生成情报摘要</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="okr" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>OKR关联分析</CardTitle>
                <CardDescription>外部信息与公司OKR目标的关联分析</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">O1: 扩大市场份额至35%</h3>
                        <Progress value={65} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span>当前进度: 65%</span>
                          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                            受外部因素影响
                          </Badge>
                        </div>
                        <div className="grid gap-3 mt-4">
                          <div className="rounded-md bg-muted p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                                <span className="font-medium">竞争对手A公司新产品线</span>
                              </div>
                              <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
                                高风险
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              竞争对手新产品线可能直接影响我们的市场份额目标，预计可能导致目标完成率下降10-15%。
                            </p>
                            <div className="flex justify-end mt-2">
                              <Button size="sm" variant="outline">
                                查看应对策略
                              </Button>
                            </div>
                          </div>
                          <div className="rounded-md bg-muted p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="font-medium">市场需求趋势变化</span>
                              </div>
                              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                                机会
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              实时数据分析需求增长与我们产品优势匹配，可能帮助抵消竞争对手带来的负面影响，提升5-8%的市场份额。
                            </p>
                            <div className="flex justify-end mt-2">
                              <Button size="sm" variant="outline">
                                查看利用策略
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">O2: 提升产品创新能力</h3>
                        <Progress value={42} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span>当前进度: 42%</span>
                          <Badge variant="outline" className="text-red-500 border-red-500">
                            高风险
                          </Badge>
                        </div>
                        <div className="grid gap-3 mt-4">
                          <div className="rounded-md bg-muted p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                                <span className="font-medium">竞争对手技术创新</span>
                              </div>
                              <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
                                高风险
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              竞争对手采用的AI驱动技术架构领先于我们当前研发进度，可能导致我们的产品创新目标落后于市场需求。
                            </p>
                            <div className="flex justify-end mt-2">
                              <Button size="sm" variant="outline">
                                查看应对策略
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">O3: 提高客户满意度至90%</h3>
                        <Progress value={78} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span>当前进度: 78%</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            稳定
                          </Badge>
                        </div>
                        <div className="grid gap-3 mt-4">
                          <div className="rounded-md bg-muted p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <BarChart3 className="h-4 w-4 text-yellow-500" />
                                <span className="font-medium">行业政策变化</span>
                              </div>
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                中等影响
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              新的合规要求可能需要我们调整部分用户体验，短期内可能影响客户满意度，但长期有利于建立信任。
                            </p>
                            <div className="flex justify-end mt-2">
                              <Button size="sm" variant="outline">
                                查看平衡策略
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">生成OKR调整建议</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="insights" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>战略洞察</CardTitle>
                <CardDescription>基于外部信息和OKR关联分析的战略洞察和行动建议</CardDescription>
              </CardHeader>
              <CardContent>
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
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">查看更多洞察</Button>
                <Button>生成战略报告</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

