const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const resumeData = {
  personalInfo: {
    name: "OPUTA UCHE UZOUKWU",
    email: "oputauzoukwu@gmail.com",
    phone: "+447946501063",
    webpage: "https://oputauche.com",
    linkedin: "https://linkedin.com/in/oputa-uche-uzoukwu"
  },
  skills: [
    {
      category: "Cloud Infrastructure",
      items: [
        "Azure Virtual Machine Management",
        "AWS EC2 & S3 Configuration",
        "Network Security Groups (NSGs)",
        "Disaster Recovery Strategies",
        "Resource Monitoring & Optimization",
        "Infrastructure-as-Code (Terraform)"
      ],
      proficiency: 4
    },
    {
      category: "IT Desktop Support",
      items: [
        "Windows/MacOS Troubleshooting",
        "Hardware Diagnostics & Repair",
        "Printer & Peripheral Setup",
        "Software Installation & Patching",
        "Remote Desktop Assistance",
        "Ticket System Management"
      ],
      proficiency: 4
    },
    {
      category: "Microsoft 365 Administration",
      items: [
        "Exchange Online Configuration",
        "SharePoint Site Management",
        "Teams Voice & Collaboration",
        "OneDrive Policy Enforcement",
        "License Allocation & Auditing",
        "Power Platform Integration"
      ],
      proficiency: 4
    },
    {
      category: "Windows Server & Networking",
      items: [
        "Active Directory Management",
        "DNS/DHCP Configuration",
        "Group Policy Implementation",
        "File Server Maintenance",
        "Network Troubleshooting",
        "Patch Management"
      ],
      proficiency: 4
    },
    {
      category: "Security & Compliance",
      items: [
        "Identity & Access Management (IAM)",
        "Data Loss Prevention (DLP)",
        "HIPAA Compliance Implementation",
        "GDPR Policy Enforcement",
        "Security Audits & Risk Assessments",
        "Security Awareness Training"
      ],
      proficiency: 4
    },
    {
      category: "Soft Skills",
      items: [
        "Technical Documentation",
        "Stakeholder Communication",
        "Incident Response Coordination",
        "User Training & Workshops",
        "Project Planning",
        "Team Leadership"
      ],
      proficiency: 4
    }
  ],
  projects: [
    {
      project: "Smart Energy Monitoring System",
      role: "Cloud Infrastructure Engineer",
      details: [
        "Deployed AWS EC2 instances for data collection",
        "Configured S3 buckets for energy usage storage",
        "Implemented basic CloudWatch monitoring",
        "Set up IAM roles for system access",
        "Created SNS alerts for system thresholds",
        "Maintained cost-effective resource allocation"
      ]
    },
    {
      project: "Hospital Management System (On-Prem)",
      role: "System Developer & Administrator",
      details: [
        "Deployed Windows Server 2019 infrastructure",
        "Configured local SQL database for patient records",
        "Managed shared network drives with NTFS permissions",
        "Implemented nightly backups using Windows Backup",
        "Maintained Active Directory user groups",
        "Provided desktop support for medical staff"
      ]
    },
    {
      project: "Raspberry Pi Home Server Development",
      role: "Systems Specialist",
      details: [
        "Configured basic file sharing with Samba",
        "Set up local user accounts and permissions",
        "Implemented SSH for remote management",
        "Created automated backup scripts",
        "Maintained system updates and patches",
        "Provided user training for file access"
      ]
    }
  ],
  education: {
    degree: "B.Eng - Electronics System Engineering",
    university: "University of Portsmouth, UK",
    year: 2016
  },
  certifications: [
    "Microsoft Certified Professional (MCP)",
    "AWS Cloud Practitioner (CLF-C02)",
    "Microsoft 365 Fundamentals (MS 900)",
    "Azure Fundamentals (AZ 900)"
  ]
};

app.get('/api/resume', (req, res) => {
  res.json(resumeData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});