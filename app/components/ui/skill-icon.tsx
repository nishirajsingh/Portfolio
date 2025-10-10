'use client'

import { 
  SiAmazonaws, 
  SiMicrosoftazure, 
  SiGooglecloud, 
  SiDocker, 
  SiKubernetes, 
  SiServerless,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiHuggingface,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiR,
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
  'TensorFlow': SiTensorflow,
  'PyTorch': SiPytorch,
  'Scikit-learn': SiScikitlearn,
  'OpenAI API': SiOpenai,
  'Hugging Face': SiHuggingface,
  'LangChain': Code,
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Java': Code,
  'Go': SiGo,
  'R': SiR,
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