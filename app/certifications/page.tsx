'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Award, ExternalLink, Calendar, ShieldCheck, Zap, Terminal, X, Search, ChevronRight } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer' 

/* ---------------- DATA ---------------- */

const CERTIFICATIONS = [
  {
    title: 'Gemini Certified Educator',
    issuer: 'Google',
    date: 'Oct 2025',
    credentialId: '163698809',
    image: '/images/certs/gemini-educator.jpg',
    link: '#',
    skills: ['GenAI', 'Education Tech']
  },
  {
    title: 'Gemini Certified University Student',
    issuer: 'Google',
    date: 'Oct 2025',
    credentialId: '163699860',
    image: '/images/certs/gemini-student.jpg',
    link: '#'
  },
  {
    title: 'Vadodara Hackathon 6.0',
    issuer: 'PIERC - Parul University',
    date: 'Sep 2025',
    image: '/images/certs/vadodara-hackathon-6.jpg',
    link: '#'
  },
  {
    title: 'Introducing Generative AI with AWS',
    issuer: 'Udacity',
    date: 'Jul 2025',
    image: '/images/certs/Intro-GenAi-AWS.jpeg',
    link: '#'
  },
  {
    title: 'Gen Ai Academy',
    issuer: 'Google',
    date: 'Jun 2025',
    image: '/images/certs/Gen-Ai.png',
    link: '#'
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'NPTEL',
    date: 'Dec 2023',
    image: '/images/certs/CEH-nptel.png',
    link: '#'
  },
  {
    title: 'Cyber Security and Privacy',
    issuer: 'NPTEL',
    date: 'Dec 2023',
    image: '/images/certs/Cyber-security-nptel.png',
    link: '#'
  }
]

// Data exported and cleaned from your Credly HTML source
const BADGES = [
  { 
    title: "AWS Cloud Quest: Cloud Practitioner", 
    issuer: "AWS Training & Certification", 
    date: "Dec 17, 2025", 
    image: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob",
    link: "https://www.credly.com/badges/a389dba4-e540-4907-a29a-296dea078f76"
  },
  { 
    title: "AWS Educate Introduction to Cloud 101", 
    issuer: "AWS Training & Certification", 
    date: "Jul 30, 2025", 
    image: "https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob",
    link: "https://www.credly.com/badges/5f2a9c86-b8c4-4308-afc7-6b6f0b82e56a"
  },
  { 
    title: "AWS Academy Graduate - Cloud Foundations", 
    issuer: "AWS Training & Certification", 
    date: "Jul 28, 2025", 
    image: "https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
    link: "https://www.credly.com/badges/87264ef3-a415-441a-aa2d-84ba97c42d3c"
  },
  { 
    title: "AWS Educate Machine Learning Foundations", 
    issuer: "AWS Training & Certification", 
    date: "Jul 18, 2025", 
    image: "https://images.credly.com/images/247efe36-9fa6-4209-ad56-0fd522283872/blob",
    link: "https://www.credly.com/badges/9af0bdc7-1923-4d6b-b41b-f7678b437191"
  },
  { 
    title: "Build Google Cloud Infrastructure for Azure Professionals", 
    issuer: "Google Cloud", 
    date: "Jun 27, 2025", 
    image: "https://images.credly.com/images/b734b28a-683b-43f2-bb9d-2b952890e545/image.png",
    link: "https://www.credly.com/badges/0f9595df-253a-418c-8cc2-f67344507383"
  },
  { 
    title: "Develop Serverless Apps with Firebase", 
    issuer: "Google Cloud", 
    date: "Jun 27, 2025", 
    image: "https://images.credly.com/images/826e89a5-1a1d-4e6c-b740-531957965a78/image.png",
    link: "https://www.credly.com/badges/49bb637d-165b-4996-976c-de2f87b8960e"
  },
  { 
    title: "Monitor and Manage Google Cloud Resources", 
    issuer: "Google Cloud", 
    date: "Jun 27, 2025", 
    image: "https://images.credly.com/images/c07b49a7-c295-4e2a-9557-09c22032e3ae/image.png",
    link: "https://www.credly.com/badges/39d2a919-2773-4580-a31f-55b8237ef38a"
  },
  { 
    title: "Build a Secure Google Cloud Network", 
    issuer: "Google Cloud", 
    date: "Jun 26, 2025", 
    image: "https://images.credly.com/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png",
    link: "https://www.credly.com/badges/cc442bce-9792-4abd-8ad6-924c2a522464"
  },
  { 
    title: "Cloud Speech API: 3 Ways", 
    issuer: "Google Cloud", 
    date: "Jun 25, 2025", 
    image: "https://images.credly.com/images/4ddcd71a-7d89-4f86-bb85-adab564f16f1/image.png",
    link: "https://www.credly.com/badges/30e61acc-a7d5-429d-9834-412a4070dd05"
  },
  { 
    title: "Create a Secure Data Lake on Cloud Storage", 
    issuer: "Google Cloud", 
    date: "Jun 25, 2025", 
    image: "https://images.credly.com/images/64335247-e0fc-4afc-ae27-e4cdd0d0590d/image.png",
    link: "https://www.credly.com/badges/8297069a-8245-4781-811d-01fd3b543bf7"
  },
  { 
    title: "Monitor Environments with Managed Prometheus", 
    issuer: "Google Cloud", 
    date: "Jun 22, 2025", 
    image: "https://images.credly.com/images/4199c028-1dd7-4802-a4fc-fe043d705b31/blob",
    link: "https://www.credly.com/badges/cd87dd57-26fb-4e26-bb64-9e859f5a2cda"
  },
  { 
    title: "Implement Multimodal Vector Search with BigQuery", 
    issuer: "Google Cloud", 
    date: "Jun 20, 2025", 
    image: "https://images.credly.com/images/6d858d84-6987-48c8-9608-f5abb9b74492/blob",
    link: "https://www.credly.com/badges/8e532c6a-c934-4e35-bd68-2e9898d47280"
  },
  { 
    title: "Develop GenAI Apps with Gemini and Streamlit", 
    issuer: "Google Cloud", 
    date: "Jun 5, 2025", 
    image: "https://images.credly.com/images/1dbef1bd-cdb0-40e1-bff4-8200448c3161/blob",
    link: "https://www.credly.com/badges/ebf5ff47-2a16-4f17-bbcf-6a8e9c71a2fe"
  },
  { 
    title: "Inspect Rich Docs with Gemini Multimodality", 
    issuer: "Google Cloud", 
    date: "Jun 5, 2025", 
    image: "https://images.credly.com/images/86a3283f-3e35-494f-82da-3fb3e89ba223/image.png",
    link: "https://www.credly.com/badges/baf90591-c423-4ce0-8d67-b9b3fceab5a9"
  },
  { 
    title: "Analyze BigQuery Data in Connected Sheets", 
    issuer: "Google Cloud", 
    date: "May 28, 2025", 
    image: "https://images.credly.com/images/75208396-7fbe-437e-8a42-46277d642697/image.png",
    link: "https://www.credly.com/badges/571b7944-ab9d-43b1-ba92-682f77d62719"
  },
  { 
    title: "Build a Website on Google Cloud", 
    issuer: "Google Cloud", 
    date: "May 28, 2025", 
    image: "https://images.credly.com/images/cfcacbf1-1f76-40ad-be09-a5b057e31ebf/image.png",
    link: "https://www.credly.com/badges/640a51c3-11f1-43b8-8208-458b79050766"
  },
  { 
    title: "Develop Your Google Cloud Network", 
    issuer: "Google Cloud", 
    date: "May 28, 2025", 
    image: "https://images.credly.com/images/b126c61c-4781-4f03-9b2b-062963003abf/image.png",
    link: "https://www.credly.com/badges/b17d6bae-db10-45df-b21a-ae15b3481f54"
  },
  { 
    title: "Predictive Modeling with BigQuery ML", 
    issuer: "Google Cloud", 
    date: "May 28, 2025", 
    image: "https://images.credly.com/images/6160e2c1-4a95-4f47-8c5b-f2dde7bb6a67/image.png",
    link: "https://www.credly.com/badges/f9bc6607-432b-43c2-80d7-bdb1ff269af7"
  },
  { 
    title: "Derive Insights from BigQuery Data", 
    issuer: "Google Cloud", 
    date: "May 21, 2025", 
    image: "https://images.credly.com/images/11088b22-7be5-4fe3-995d-c014514c8dc3/image.png",
    link: "https://www.credly.com/badges/3d292bc2-5594-4788-b3a3-e2913609de3b"
  },
  { 
    title: "Implement CI/CD Pipelines on GC", 
    issuer: "Google Cloud", 
    date: "May 21, 2025", 
    image: "https://images.credly.com/images/0daf1b0e-28c3-4102-96cf-e9d5f9213cc3/image.png",
    link: "https://www.credly.com/badges/554a4b6e-5e08-4630-8992-303c014efb0f"
  },
  { 
    title: "Build a Data Warehouse with BigQuery", 
    issuer: "Google Cloud", 
    date: "May 19, 2025", 
    image: "https://images.credly.com/images/8ab21779-042f-4616-a6ab-fd0d62648b24/image.png",
    link: "https://www.credly.com/badges/49575996-22ae-4bec-b392-c531c144e6cc"
  },
  { 
    title: "Implement Cloud Security Fundamentals", 
    issuer: "Google Cloud", 
    date: "May 19, 2025", 
    image: "https://images.credly.com/images/f1dbea96-0ef4-4857-bb85-3d208a82de10/image.png",
    link: "https://www.credly.com/badges/71c19e68-1af1-466e-8e3a-e521adc5ff6b"
  },
  { 
    title: "Secure Software Delivery", 
    issuer: "Google Cloud", 
    date: "May 12, 2025", 
    image: "https://images.credly.com/images/dd932e71-6255-4c38-b873-7c2f6a44c1f6/blob",
    link: "https://www.credly.com/badges/88fb662e-4462-473c-a73a-632272350679"
  },
  { 
    title: "Implement DevOps Workflows", 
    issuer: "Google Cloud", 
    date: "May 10, 2025", 
    image: "https://images.credly.com/images/7514501c-47e3-4766-a833-2f45eacdf615/image.png",
    link: "https://www.credly.com/badges/b46be60e-f358-473a-8350-fbb8a16c8033"
  },
  { 
    title: "Secure BigLake Data", 
    issuer: "Google Cloud", 
    date: "May 10, 2025", 
    image: "https://images.credly.com/images/f4037855-1b1d-4338-985f-fec235b152a6/image.png",
    link: "https://www.credly.com/badges/1d31e2b3-8b1c-449b-a3c8-9f14d01356e2"
  },
  { 
    title: "Create a Streaming Data Lake", 
    issuer: "Google Cloud", 
    date: "May 9, 2025", 
    image: "https://images.credly.com/images/2e7a4b7e-981f-49c6-96de-fb11485bfbe8/image.png",
    link: "https://www.credly.com/badges/95ff3ff0-e1ef-46b4-814c-f0ce5236587c"
  },
  { 
    title: "Manage Kubernetes in Google Cloud", 
    issuer: "Google Cloud", 
    date: "May 9, 2025", 
    image: "https://images.credly.com/images/20cd679d-43c3-460e-979a-8feba38eaba6/image.png",
    link: "https://www.credly.com/badges/1f8017f4-5d35-45ba-89fd-6480f5a4721f"
  },
  { 
    title: "Perform Predictive Data Analysis", 
    issuer: "Google Cloud", 
    date: "May 9, 2025", 
    image: "https://images.credly.com/images/d41246ef-1f8e-4b3a-b93d-034e7c66e309/image.png",
    link: "https://www.credly.com/badges/fc70bc11-037c-451a-b3ed-35d559bb5dce"
  },
  { 
    title: "Prepare Data for ML APIs", 
    issuer: "Google Cloud", 
    date: "May 9, 2025", 
    image: "https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
    link: "https://www.credly.com/badges/f5da95b3-d418-48cc-a10d-3da14ae71bc2"
  },
  { 
    title: "Create ML Models with BigQuery ML", 
    issuer: "Google Cloud", 
    date: "May 6, 2025", 
    image: "https://images.credly.com/images/073a27aa-c3d6-44b5-875f-906191666d70/image.png",
    link: "https://www.credly.com/badges/d17cb16d-8d4b-4f21-a590-ac45692e0222"
  },
  { 
    title: "Develop Serverless Apps on Cloud Run", 
    issuer: "Google Cloud", 
    date: "May 6, 2025", 
    image: "https://images.credly.com/images/71b9b0df-64f1-4c0a-867f-942e2a5a5a14/image.png",
    link: "https://www.credly.com/badges/9a468dc0-79dd-4856-bb05-b66dfc83df89"
  },
  { 
    title: "Implement Load Balancing on GCE", 
    issuer: "Google Cloud", 
    date: "May 6, 2025", 
    image: "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
    link: "https://www.credly.com/badges/360a8404-478d-41c0-9ff9-7bbb3dc35a84"
  },
  { 
    title: "Monitor and Log with Operations Suite", 
    issuer: "Google Cloud", 
    date: "May 6, 2025", 
    image: "https://images.credly.com/images/030ef753-5a56-4a6b-887a-a329a1b0c986/image.png",
    link: "https://www.credly.com/badges/58fd749c-2b2e-450e-bb7c-114c0afd1b5b"
  },
  { 
    title: "Protect Cloud Traffic with BeyondCorp", 
    issuer: "Google Cloud", 
    date: "May 6, 2025", 
    image: "https://images.credly.com/images/70116ac6-9bf9-4600-b8db-7d0147fb5da8/image.png",
    link: "https://www.credly.com/badges/828f14c8-8e4f-449f-b551-0072f248830d"
  },
  { 
    title: "Service Accounts and IAM Roles", 
    issuer: "Google Cloud", 
    date: "May 4, 2025", 
    image: "https://images.credly.com/images/374800df-53a7-407e-b660-1efa73da122a/image.png",
    link: "https://www.credly.com/badges/4f6cf595-d2d5-477c-90bf-0beb172fff38"
  },
  { 
    title: "Analyze Speech and Language with GC APIs", 
    issuer: "Google Cloud", 
    date: "May 2, 2025", 
    image: "https://images.credly.com/images/b82729b9-8f1f-4362-8b71-fb08f2cea6c2/image.png",
    link: "https://www.credly.com/badges/5ec444ea-8950-4dab-9c67-48d947cc2430"
  },
  { 
    title: "App Building with AppSheet", 
    issuer: "Google Cloud", 
    date: "May 2, 2025", 
    image: "https://images.credly.com/images/cdd80963-5ccb-4981-b01c-5344a9a3e8df/image.png",
    link: "https://www.credly.com/badges/f65bc01b-96d4-413c-853f-68a362ae721f"
  },
  { 
    title: "Protect Sensitive Data with DLP", 
    issuer: "Google Cloud", 
    date: "May 2, 2025", 
    image: "https://images.credly.com/images/81b8d708-19b5-4381-8ee1-576dcb20f536/image.png",
    link: "https://www.credly.com/badges/f90ab5ed-3869-4fa5-a33a-cf5651110656"
  },
  { 
    title: "Set Up a Google Cloud Network", 
    issuer: "Google Cloud", 
    date: "May 2, 2025", 
    image: "https://images.credly.com/images/189c5c31-67c6-4eae-87dc-3b8185a99043/image.png",
    link: "https://www.credly.com/badges/300f63c0-fbff-4d94-a814-dcfb32997bf4"
  },
  { 
    title: "Analyze Images with Cloud Vision API", 
    issuer: "Google Cloud", 
    date: "May 1, 2025", 
    image: "https://images.credly.com/images/bb8edfd1-9d69-48a3-bf81-3ab830caf393/image.png",
    link: "https://www.credly.com/badges/4772a948-21b2-4221-aefe-b772f987f79a"
  },
  { 
    title: "Build Real World AI with Gemini & Imagen", 
    issuer: "Google Cloud", 
    date: "May 1, 2025", 
    image: "https://images.credly.com/images/b7898c75-72ce-4304-b227-0aa7563aaca9/blob",
    link: "https://www.credly.com/badges/414091ee-94de-423c-966b-0f945c5d75bf"
  },
  { 
    title: "Enrich Metadata and Discovery of BigLake", 
    issuer: "Google Cloud", 
    date: "May 1, 2025", 
    image: "https://images.credly.com/images/9ec58f1e-2cfc-4dfc-acae-dc7de5c10da7/blob",
    link: "https://www.credly.com/badges/75989174-805b-4d5f-9dbe-18d4ffb3e2bf"
  },
  { 
    title: "Streaming Analytics into BigQuery", 
    issuer: "Google Cloud", 
    date: "May 1, 2025", 
    image: "https://images.credly.com/images/3934ff47-3ef9-40cb-82d2-66a40d33886a/image.png",
    link: "https://www.credly.com/badges/0501f0f0-0994-4f42-9210-58bdbb23bc60"
  },
  { 
    title: "Build LookML Objects in Looker", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/2607a61b-7f94-43d7-bb97-3e811312c53e/image.png",
    link: "https://www.credly.com/badges/4b911052-cdb6-4e84-8eb0-6efe75bf6d45"
  },
  { 
    title: "Discover and Protect Sensitive Data", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/a380b061-fd3a-4cb4-8835-9efa241a35a5/blob",
    link: "https://www.credly.com/badges/1d65306f-2291-4b1b-a923-31388fffb7df"
  },
  { 
    title: "Explore GenAI with Vertex AI Gemini", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/9ecc031b-5f5a-418d-8397-1612c0f40fce/image.png",
    link: "https://www.credly.com/badges/17654523-b360-46e3-aa44-eb2268dbc057"
  },
  { 
    title: "Prompt Design in Vertex AI", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png",
    link: "https://www.credly.com/badges/24c7dd88-712c-4a79-a106-006b7e6f3989"
  },
  { 
    title: "Store/Process Data - Command Line", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/42242faf-e2ec-4c2c-aa57-8c27b190dd83/image.png",
    link: "https://www.credly.com/badges/9c536a17-b733-46fc-a624-1d97db241817"
  },
  { 
    title: "Store/Process Data - Console", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/449ee94a-268c-4a6d-9983-0507fbdeaf46/image.png",
    link: "https://www.credly.com/badges/c9f38197-a739-46d1-8c6c-19676540471c"
  },
  { 
    title: "Functions, Formulas, Charts in Sheets", 
    issuer: "Google Cloud", 
    date: "Apr 25, 2025", 
    image: "https://images.credly.com/images/f469072b-7e9a-4961-8096-292853f063e7/image.png",
    link: "https://www.credly.com/badges/8c253a9f-69cc-4f7a-9013-3c1b4a490b77"
  },
  { 
    title: "Infrastructure with Terraform on GC", 
    issuer: "Google Cloud", 
    date: "Apr 24, 2025", 
    image: "https://images.credly.com/images/b18154fb-9bd3-47e5-a6f1-554be512947d/image.png",
    link: "https://www.credly.com/badges/c6bac894-eb0f-476c-8440-eabc71069bff"
  },
  { 
    title: "Deploy Kubernetes Applications on GC", 
    issuer: "Google Cloud", 
    date: "Apr 23, 2025", 
    image: "https://images.credly.com/images/f0388a0c-130f-47cd-8750-d6357e907e58/image.png",
    link: "https://www.credly.com/badges/c14e2327-390b-49df-8cb6-2ce592466b94"
  },
  { 
    title: "Get Started with Google Workspace Tools", 
    issuer: "Google Cloud", 
    date: "Apr 23, 2025", 
    image: "https://images.credly.com/images/7e78d94e-d10b-4699-a75a-96115b24c238/image.png",
    link: "https://www.credly.com/badges/45bfcf17-d888-47dd-a745-95e694f9a48c"
  },
  { 
    title: "Set Up an App Dev Environment on GC", 
    issuer: "Google Cloud", 
    date: "Apr 23, 2025", 
    image: "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
    link: "https://www.credly.com/badges/e85bfda4-57c3-4075-be77-f4a0da1978b0"
  },
  { 
    title: "Get Started with Dataplex", 
    issuer: "Google Cloud", 
    date: "Dec 23, 2024", 
    image: "https://images.credly.com/images/1aa38026-5e9d-45f5-becc-288601568ad5/image.png",
    link: "https://www.credly.com/badges/95db109e-a75c-4e1a-8622-5e3a1acf6edf"
  },
  { 
    title: "Monitoring in Google Cloud", 
    issuer: "Google Cloud", 
    date: "Dec 23, 2024", 
    image: "https://images.credly.com/images/5a9654e8-37e5-4043-8a94-eeb0f98a2a9c/image.png",
    link: "https://www.credly.com/badges/46f68c74-c255-4d37-b37f-e71f93cfc48d"
  },
  { 
    title: "Cloud Functions: 3 Ways", 
    issuer: "Google Cloud", 
    date: "Dec 22, 2024", 
    image: "https://images.credly.com/images/12ca3878-2560-4d84-a3a5-c317db9ca549/image.png",
    link: "https://www.credly.com/badges/393620bb-a5cd-47e6-9cba-72d8718ddb11"
  },
  { 
    title: "Get Started with Eventarc", 
    issuer: "Google Cloud", 
    date: "Dec 22, 2024", 
    image: "https://images.credly.com/images/5aa8a83f-22d6-4aa2-9a65-f95290187ce3/image.png",
    link: "https://www.credly.com/badges/e60b1f3e-9a3a-4d79-8f35-f528f4f1281e"
  },
  { 
    title: "App Engine: 3 Ways", 
    issuer: "Google Cloud", 
    date: "Dec 10, 2024", 
    image: "https://images.credly.com/images/0943ce78-1ef7-4ff4-8ad7-4b60f6de5e5f/image.png",
    link: "https://www.credly.com/badges/55f0f68e-a512-4aba-b16c-393bd47116ea"
  },
  { 
    title: "Networking Fundamentals on GC", 
    issuer: "Google Cloud", 
    date: "Dec 10, 2024", 
    image: "https://images.credly.com/images/6edf3d92-7a1f-425f-aa2b-d17223df9cf7/image.png",
    link: "https://www.credly.com/badges/e3aeb888-8c46-464d-b1d8-a5766ccb8022"
  },
  { 
    title: "Analyze Sentiment with GC NLP API", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/bd687b0c-3959-4e06-b511-6623e32b8fdb/image.png",
    link: "https://www.credly.com/badges/d33728a2-38c8-4ce3-8702-40bd73a56adb"
  },
  { 
    title: "Develop with Apps Script and AppSheet", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/c99de4cf-a2fe-4c34-9b38-43ea165ea0f4/image.png",
    link: "https://www.credly.com/badges/d78f4b2c-0b9f-46ba-96b6-1c574e4c5e21"
  },
  { 
    title: "Get Started with API Gateway", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/79d45afd-9552-447b-96d0-b4c2037f59be/image.png",
    link: "https://www.credly.com/badges/7c66805a-c40a-41e3-9073-d9111df79bb0"
  },
  { 
    title: "Get Started with Cloud Storage", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/8fae0693-0a1a-4c15-b3b6-10b4104d0e30/image.png",
    link: "https://www.credly.com/badges/90ce8a2b-1894-4c8a-94c9-d60b6e7af1bf"
  },
  { 
    title: "Get Started with Pub/Sub", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/4b9b3bd9-02b8-4243-8def-893557125497/image.png",
    link: "https://www.credly.com/badges/b8d6f59f-6962-4478-b7df-8d548cfcf476"
  },
  { 
    title: "Security Command Center Mitigation", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/122ab775-7bbd-4167-a3b5-5dd92b4e02f6/image.png",
    link: "https://www.credly.com/badges/4216d819-a319-429b-902c-4c5a0b250edd"
  },
  { 
    title: "Basics of Google Cloud Compute", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/7623fefd-ebbd-4d8f-a053-f41dca852d9e/image.png",
    link: "https://www.credly.com/badges/7cd4f349-ff5e-47cc-9ca8-feb1519b1a22"
  },
  { 
    title: "APIs to Work with Cloud Storage", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/0c6a247d-8bbd-407b-8f83-dd863d251587/image.png",
    link: "https://www.credly.com/badges/1d098578-74b8-41f0-997a-066d938db2fc"
  },
  { 
    title: "Using the Google Cloud Speech API", 
    issuer: "Google Cloud", 
    date: "Nov 12, 2024", 
    image: "https://images.credly.com/images/2f0d66d4-9479-43e5-a101-42cda01123dc/image.png",
    link: "https://www.credly.com/badges/a2106246-4965-46a8-84ff-0136e389d38b"
  }
];

export default function CertificationsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <EnhancedNavbar />
      
      {/* Visual background sync */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <section className="relative py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <header className="mb-20">
            <motion.div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4">
              <Terminal size={16} /> <span>./accreditations</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-bold dark:text-white tracking-tighter">
              Proof of <br /> <span className="text-zinc-400">Competence.</span>
            </h1>
          </header>

          {/* 1. Main Certifications Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden hover:border-orange-500/50 transition-all shadow-sm"
              >
                <div className="relative h-52 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer" onClick={() => setSelectedImg(cert.image)}>
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono font-bold text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded uppercase">{cert.issuer}</span>
                    <ShieldCheck size={18} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white leading-tight mb-2 group-hover:text-orange-500 transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <Calendar size={12} /> {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Dynamic Skill Badges Section */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl font-bold dark:text-white tracking-tight flex items-center gap-3">
                  System Badges <Zap className="text-orange-500 fill-orange-500" size={24} />
                </h2>
                <p className="text-zinc-500 mt-2 font-mono text-sm">// Verified via Credly.com profile</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {BADGES.map((badge, i) => (
                <motion.a
                  key={i}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm group flex flex-col items-center text-center overflow-hidden hover:border-orange-500/40 transition-all shadow-sm"
                >
                  <div className="relative w-24 h-24 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:rotate-3">
                    <img 
                      src={badge.image} 
                      alt={badge.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-[10px] font-bold dark:text-zinc-300 leading-tight mb-2 uppercase tracking-tight h-10 overflow-hidden line-clamp-3 group-hover:text-orange-500 transition-colors">
                    {badge.title}
                  </h4>
                  <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/50 w-full flex justify-between items-center text-[8px] font-mono text-zinc-500 uppercase tracking-tighter">
                    <span>{badge.date.replace('Issued ', '')}</span>
                    <ExternalLink size={10} className="group-hover:text-orange-500" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for certificates */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"><X size={40} /></button>
            <div className="relative w-full h-full max-w-5xl">
              <img src={selectedImg} alt="Certificate Zoom" className="w-full h-full object-contain shadow-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}