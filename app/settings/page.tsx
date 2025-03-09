"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Radar, Settings } from "lucide-react"

export default function SettingsPage() {
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
            <Link
              href="/insights"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              战略洞察
            </Link>
            <Link href="/settings" className="text-sm font-medium text-primary">
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
          <h2 className="text-3xl font-bold tracking-tight">设置</h2>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">通用设置</TabsTrigger>
            <TabsTrigger value="monitoring">监测设置</TabsTrigger>
            <TabsTrigger value="okr">OKR集成</TabsTrigger>
            <TabsTrigger value="notifications">通知设置</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>通用设置</CardTitle>
                <CardDescription>管理系统的基本设置和偏好</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">公司名称</Label>
                  <Input id="company-name" defaultValue="示例科技有限公司" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">所属行业</Label>
                  <Select defaultValue="tech">
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="选择行业" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">信息技术</SelectItem>
                      <SelectItem value="finance">金融服务</SelectItem>
                      <SelectItem value="healthcare">医疗健康</SelectItem>
                      <SelectItem value="retail">零售</SelectItem>
                      <SelectItem value="manufacturing">制造业</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="font-medium">界面主题</div>
                  <RadioGroup defaultValue="system">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="theme-light" />
                      <Label htmlFor="theme-light">浅色</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="theme-dark" />
                      <Label htmlFor="theme-dark">深色</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="theme-system" />
                      <Label htmlFor="theme-system">跟随系统</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="font-medium">数据隐私</div>
                  <div className="flex items-center space-x-2">
                    <Switch id="data-collection" defaultChecked />
                    <Label htmlFor="data-collection">允许匿名使用数据收集以改进服务</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>保存设置</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>监测设置</CardTitle>
                <CardDescription>配置信息监测的来源、频率和关键词</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="font-medium">监测信息来源</div>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-news" defaultChecked />
                      <Label htmlFor="source-news">行业新闻</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-reports" defaultChecked />
                      <Label htmlFor="source-reports">行业报告</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-competitors" defaultChecked />
                      <Label htmlFor="source-competitors">竞争对手公告</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-social" defaultChecked />
                      <Label htmlFor="source-social">社交媒体</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-policy" defaultChecked />
                      <Label htmlFor="source-policy">政策法规</Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="monitoring-frequency">监测频率</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="monitoring-frequency">
                      <SelectValue placeholder="选择监测频率" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">实时监测</SelectItem>
                      <SelectItem value="hourly">每小时</SelectItem>
                      <SelectItem value="daily">每日</SelectItem>
                      <SelectItem value="weekly">每周</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="keywords">关键词监测</Label>
                  <div className="grid gap-2">
                    <Input
                      id="keywords"
                      placeholder="添加关键词，用逗号分隔"
                      defaultValue="人工智能, 大数据, 云计算, 数据安全"
                    />
                    <p className="text-sm text-muted-foreground">
                      添加与您业务相关的关键词，系统将优先监测包含这些关键词的信息
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="competitors">竞争对手监测</Label>
                  <div className="grid gap-2">
                    <Input
                      id="competitors"
                      placeholder="添加竞争对手名称，用逗号分隔"
                      defaultValue="A公司, B科技, C集团"
                    />
                    <p className="text-sm text-muted-foreground">添加需要重点监测的竞争对手名称</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>保存设置</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="okr" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>OKR集成</CardTitle>
                <CardDescription>配置与公司OKR系统的集成</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="okr-system">OKR系统</Label>
                  <Select defaultValue="internal">
                    <SelectTrigger id="okr-system">
                      <SelectValue placeholder="选择OKR系统" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internal">内部OKR系统</SelectItem>
                      <SelectItem value="workday">Workday</SelectItem>
                      <SelectItem value="15five">15Five</SelectItem>
                      <SelectItem value="perdoo">Perdoo</SelectItem>
                      <SelectItem value="gtmhub">Gtmhub</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="api-key">API密钥</Label>
                  <Input id="api-key" type="password" defaultValue="••••••••••••••••" />
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="font-medium">同步设置</div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-sync" defaultChecked />
                    <Label htmlFor="auto-sync">自动同步OKR数据</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sync-frequency">同步频率</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="sync-frequency">
                      <SelectValue placeholder="选择同步频率" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">每小时</SelectItem>
                      <SelectItem value="daily">每日</SelectItem>
                      <SelectItem value="weekly">每周</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="font-medium">OKR关联分析设置</div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-analysis" defaultChecked />
                    <Label htmlFor="auto-analysis">自动进行OKR关联分析</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="impact-threshold" defaultChecked />
                    <Label htmlFor="impact-threshold">仅显示高影响度的关联</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">测试连接</Button>
                <Button>保存设置</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>通知设置</CardTitle>
                <CardDescription>配置系统通知的方式和频率</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="font-medium">通知渠道</div>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-email" defaultChecked />
                      <Label htmlFor="notify-email">电子邮件</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-app" defaultChecked />
                      <Label htmlFor="notify-app">应用内通知</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-sms" />
                      <Label htmlFor="notify-sms">短信</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-slack" defaultChecked />
                      <Label htmlFor="notify-slack">Slack</Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="font-medium">通知类型</div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify-high-priority" defaultChecked />
                        <Label htmlFor="notify-high-priority">高优先级警报</Label>
                      </div>
                      <Select defaultValue="realtime">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="选择频率" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">实时</SelectItem>
                          <SelectItem value="daily">每日摘要</SelectItem>
                          <SelectItem value="weekly">每周摘要</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify-medium-priority" defaultChecked />
                        <Label htmlFor="notify-medium-priority">中优先级警报</Label>
                      </div>
                      <Select defaultValue="daily">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="选择频率" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">实时</SelectItem>
                          <SelectItem value="daily">每日摘要</SelectItem>
                          <SelectItem value="weekly">每周摘要</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify-low-priority" />
                        <Label htmlFor="notify-low-priority">低优先级警报</Label>
                      </div>
                      <Select defaultValue="weekly">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="选择频率" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">实时</SelectItem>
                          <SelectItem value="daily">每日摘要</SelectItem>
                          <SelectItem value="weekly">每周摘要</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify-insights" defaultChecked />
                        <Label htmlFor="notify-insights">新战略洞察</Label>
                      </div>
                      <Select defaultValue="daily">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="选择频率" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">实时</SelectItem>
                          <SelectItem value="daily">每日摘要</SelectItem>
                          <SelectItem value="weekly">每周摘要</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="font-medium">接收人设置</div>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="recipients-executives" defaultChecked />
                      <Label htmlFor="recipients-executives">高管团队</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="recipients-department-heads" defaultChecked />
                      <Label htmlFor="recipients-department-heads">部门负责人</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="recipients-team-leads" />
                      <Label htmlFor="recipients-team-leads">团队负责人</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>保存设置</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

