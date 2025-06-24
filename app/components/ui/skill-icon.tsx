'use client'

import { 
  SiAmazonaws, 
  SiMicrosoftazure, 
  SiGooglecloud, 
  SiDocker, 
  SiKubernetes, 
  SiServerless,
  SiSwift,
  SiXcode,
  SiAppstore,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiJava,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiTerraform
} from 'react-icons/si'
import { Database, Smartphone, Code, Wrench } from 'lucide-react'

const skillIcons: Record<string, React.ComponentType<any>> = {
  'AWS': SiAmazonaws,
  'Azure': SiMicrosoftazure,
  'Google Cloud': SiGooglecloud,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Serverless': SiServerless,
  'Swift': SiSwift,
  'SwiftUI': SiSwift,
  'UIKit': Smartphone,
  'Core Data': Database,
  'Xcode': SiXcode,
  'App Store': SiAppstore,
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Java': SiJava,
  'Go': SiGo,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Git': SiGit,
  'CI/CD': Code,
  'Terraform': SiTerraform
}

interface SkillIconProps {
  skill: string
  className?: string
}

export function SkillIcon({ skill, className = "w-4 h-4" }: SkillIconProps) {
  const IconComponent = skillIcons[skill] || Code
  return <IconComponent className={className} />
}