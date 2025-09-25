'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GalleryGrid } from '@/components/GalleryGrid'
import { siteData } from '@/data/site'

export function GalleryTabs() {
  const [activeTab, setActiveTab] = useState(siteData.branches[0].slug)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        {siteData.branches.map((branch) => (
          <TabsTrigger key={branch.slug} value={branch.slug} className="text-base">
            {branch.name.split('—')[1]?.trim() || branch.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {siteData.branches.map((branch) => (
        <TabsContent key={branch.slug} value={branch.slug}>
          <GalleryGrid 
            images={branch.gallery} 
            title={`${branch.name} Gallery`}
          />
        </TabsContent>
      ))}
    </Tabs>
  )
}
