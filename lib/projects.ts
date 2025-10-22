import type { Project, Testimonial } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Customer Segmentation Analysis',
    slug: 'ecommerce-customer-segmentation',
    description: 'Comprehensive customer segmentation analysis for a major e-commerce platform resulting in 35% increase in marketing ROI.',
    excerpt: 'Advanced customer segmentation using RFM analysis and machine learning to identify high-value customer groups and optimize marketing strategies.',
    category: 'customer-analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Tableau', 'RFM Analysis'],
    client: 'E-commerce Startup',
    duration: '6 weeks',
    date: '2024-01-15',
    challenge: 'The client was a rapidly growing e-commerce startup struggling with declining email marketing conversion rates despite increasing their customer base. They had rich transactional data but lacked insights into customer behavior patterns and segments. The marketing team was using a one-size-fits-all approach, leading to email fatigue and poor engagement rates.',
    solution: 'I implemented a comprehensive customer segmentation strategy using RFM (Recency, Frequency, Monetary) analysis combined with K-means clustering. The solution included: 1) Data preprocessing and feature engineering to create meaningful customer metrics, 2) Advanced clustering algorithms to identify distinct customer segments, 3) Behavioral analysis to understand purchase patterns and preferences, 4) Development of targeted marketing strategies for each segment, 5) Creation of an automated scoring system for new customers.',
    results: [
      {
        metric: 'Marketing ROI',
        value: '+35%',
        description: 'Increase in marketing return on investment through targeted campaigns',
        icon: 'trending-up'
      },
      {
        metric: 'Email CTR',
        value: '+42%',
        description: 'Improvement in email click-through rates across all segments',
        icon: 'mail'
      },
      {
        metric: 'Customer Retention',
        value: '+28%',
        description: 'Increase in customer retention rate through personalized experiences',
        icon: 'users'
      },
      {
        metric: 'Conversion Rate',
        value: '+31%',
        description: 'Overall conversion rate improvement from targeted marketing',
        icon: 'target'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Scikit-learn', icon: 'ml', category: 'framework' },
      { name: 'Pandas', icon: 'data', category: 'framework' },
      { name: 'Tableau', icon: 'chart', category: 'visualization' },
      { name: 'PostgreSQL', icon: 'database', category: 'database' }
    ],
    testimonial: {
      id: '1',
      name: 'Sarah Chen',
      role: 'Head of Marketing',
      company: 'E-commerce Startup',
      content: 'Alex transformed our understanding of our customers. The segmentation insights led to our most successful marketing campaigns ever, and the automated scoring system continues to drive results months later.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '2',
    title: 'Predictive Churn Model for Telecom',
    slug: 'telecom-churn-prediction',
    description: 'Built a machine learning model to predict customer churn with 89% accuracy, helping reduce churn rate by 23%.',
    excerpt: 'Developed an ensemble machine learning model using gradient boosting and neural networks to predict customer churn with high accuracy.',
    category: 'predictive-modeling',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'XGBoost', 'TensorFlow', 'SQL', 'Power BI'],
    client: 'Telecom Company',
    duration: '8 weeks',
    date: '2023-11-20',
    challenge: 'A major telecom company was experiencing a high customer churn rate of 18% annually, significantly impacting revenue growth. They needed to identify at-risk customers proactively to implement retention strategies. Existing manual processes were reactive and ineffective, with customer service teams only learning about churn intentions during cancellation calls.',
    solution: 'I developed a sophisticated ensemble machine learning model that combined XGBoost and neural networks to predict customer churn probability. The solution included: 1) Comprehensive feature engineering from customer demographics, usage patterns, billing history, and service interactions, 2) Advanced model selection and hyperparameter tuning, 3) Real-time scoring pipeline for daily customer risk assessment, 4) Integration with CRM systems for automated retention campaigns, 5) Explainable AI components to help customer service teams understand churn factors.',
    results: [
      {
        metric: 'Model Accuracy',
        value: '89%',
        description: 'Prediction accuracy on test dataset with high precision and recall',
        icon: 'target'
      },
      {
        metric: 'Churn Reduction',
        value: '-23%',
        description: 'Decrease in overall churn rate through proactive interventions',
        icon: 'trending-down'
      },
      {
        metric: 'Revenue Protected',
        value: '$2.1M',
        description: 'Annual revenue protected from churn through early intervention',
        icon: 'dollar-sign'
      },
      {
        metric: 'Cost Savings',
        value: '$850K',
        description: 'Reduction in customer acquisition costs by improving retention',
        icon: 'piggy-bank'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'XGBoost', icon: 'ml', category: 'framework' },
      { name: 'TensorFlow', icon: 'ai', category: 'framework' },
      { name: 'SQL Server', icon: 'database', category: 'database' },
      { name: 'Power BI', icon: 'chart', category: 'visualization' }
    ],
    testimonial: {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'VP of Customer Success',
      company: 'Telecom Company',
      content: 'The churn prediction model Alex built has been a game-changer for our retention efforts. We can now identify at-risk customers weeks in advance and take proactive action.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    }
  },
  {
    id: '3',
    title: 'Sales Forecasting Dashboard for Retail',
    slug: 'retail-sales-forecasting',
    description: 'Created an interactive dashboard with automated sales forecasting that improved inventory planning accuracy by 40%.',
    excerpt: 'Built a comprehensive sales forecasting system using time series analysis and machine learning with real-time dashboard visualization.',
    category: 'business-intelligence',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Prophet', 'Streamlit', 'PostgreSQL', 'Docker'],
    client: 'Retail Chain',
    duration: '5 weeks',
    date: '2023-09-10',
    challenge: 'A multi-location retail chain was struggling with inventory management, experiencing both overstocking and stockouts due to inaccurate sales forecasting. Their manual forecasting process was time-consuming, relied heavily on gut instinct, and couldn\'t account for seasonal patterns or external factors like promotions and weather.',
    solution: 'I implemented an automated sales forecasting system using Facebook Prophet with custom seasonality adjustments and external factor integration. The solution included: 1) Time series decomposition to understand trend and seasonal components, 2) Integration of external factors like weather, holidays, and promotional events, 3) Store-level and product-category forecasting models, 4) Interactive Streamlit dashboard for real-time forecasting and scenario planning, 5) Automated alerting system for significant forecast deviations.',
    results: [
      {
        metric: 'Forecast Accuracy',
        value: '+40%',
        description: 'Improvement in forecasting accuracy across all product categories',
        icon: 'trending-up'
      },
      {
        metric: 'Inventory Costs',
        value: '-18%',
        description: 'Reduction in inventory holding costs through optimized stocking',
        icon: 'package'
      },
      {
        metric: 'Stockouts',
        value: '-52%',
        description: 'Decrease in stockout incidents across all locations',
        icon: 'alert-triangle'
      },
      {
        metric: 'Planning Time',
        value: '-75%',
        description: 'Reduction in time spent on manual forecasting processes',
        icon: 'clock'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Prophet', icon: 'forecast', category: 'framework' },
      { name: 'Streamlit', icon: 'dashboard', category: 'visualization' },
      { name: 'PostgreSQL', icon: 'database', category: 'database' },
      { name: 'Docker', icon: 'container', category: 'tools' }
    ],
    testimonial: {
      id: '3',
      name: 'Jennifer Walsh',
      role: 'Operations Director',
      company: 'Retail Chain',
      content: 'Alex\'s forecasting dashboard has revolutionized our inventory planning. We\'ve eliminated most stockouts while significantly reducing our holding costs.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    }
  },
  {
    id: '4',
    title: 'Healthcare Readmission Risk Analysis',
    slug: 'healthcare-readmission-analysis',
    description: 'Developed a predictive model to identify patients at high risk of hospital readmission, reducing readmission rates by 15%.',
    excerpt: 'Machine learning model analyzing patient data, treatment history, and social determinants to predict readmission risk.',
    category: 'predictive-modeling',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Random Forest', 'SHAP', 'Healthcare', 'Compliance'],
    client: 'Regional Hospital System',
    duration: '10 weeks',
    date: '2023-07-15',
    challenge: 'High readmission rates were affecting patient outcomes and hospital finances due to Medicare penalties.',
    solution: 'Built interpretable ML models with SHAP explanations and integrated with EHR systems for real-time risk scoring.',
    results: [
      {
        metric: 'Readmission Rate',
        value: '-15%',
        description: 'Reduction in 30-day readmission rates',
        icon: 'activity'
      },
      {
        metric: 'Cost Savings',
        value: '$1.2M',
        description: 'Annual savings from reduced penalties and improved outcomes',
        icon: 'dollar-sign'
      },
      {
        metric: 'Patient Outcomes',
        value: '+22%',
        description: 'Improvement in patient satisfaction scores',
        icon: 'heart'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Random Forest', icon: 'ml', category: 'framework' },
      { name: 'SHAP', icon: 'explain', category: 'framework' }
    ]
  },
  {
    id: '5',
    title: 'Financial Fraud Detection System',
    slug: 'fraud-detection-system',
    description: 'Implemented real-time fraud detection using anomaly detection and ensemble methods, reducing false positives by 60%.',
    excerpt: 'Advanced fraud detection system using unsupervised learning and ensemble methods for real-time transaction monitoring.',
    category: 'predictive-modeling',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Isolation Forest', 'Real-time', 'Apache Kafka', 'Security'],
    client: 'FinTech Company',
    duration: '12 weeks',
    date: '2023-05-20',
    challenge: 'Existing fraud detection system had high false positive rates, causing customer friction and operational costs.',
    solution: 'Developed hybrid anomaly detection system with real-time processing pipeline and adaptive learning capabilities.',
    results: [
      {
        metric: 'False Positives',
        value: '-60%',
        description: 'Reduction in false positive fraud alerts',
        icon: 'shield'
      },
      {
        metric: 'Detection Speed',
        value: '50ms',
        description: 'Average time to detect and flag fraudulent transactions',
        icon: 'zap'
      },
      {
        metric: 'Fraud Caught',
        value: '94%',
        description: 'Accuracy in detecting actual fraudulent transactions',
        icon: 'target'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Isolation Forest', icon: 'ml', category: 'framework' },
      { name: 'Apache Kafka', icon: 'streaming', category: 'tools' }
    ]
  },
  {
    id: '6',
    title: 'Supply Chain Optimization Dashboard',
    slug: 'supply-chain-optimization',
    description: 'Built analytics platform optimizing supply chain operations, reducing costs by 12% and improving delivery times.',
    excerpt: 'Comprehensive supply chain analytics with predictive inventory management and route optimization.',
    category: 'business-intelligence',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Optimization', 'Plotly', 'Supply Chain', 'Logistics'],
    client: 'Manufacturing Company',
    duration: '7 weeks',
    date: '2023-03-10',
    challenge: 'Complex supply chain with multiple suppliers and distribution centers lacking visibility and optimization.',
    solution: 'Created integrated analytics platform with demand forecasting, inventory optimization, and route planning.',
    results: [
      {
        metric: 'Cost Reduction',
        value: '-12%',
        description: 'Overall supply chain cost reduction',
        icon: 'trending-down'
      },
      {
        metric: 'Delivery Time',
        value: '-8%',
        description: 'Improvement in average delivery times',
        icon: 'truck'
      },
      {
        metric: 'Inventory Turnover',
        value: '+25%',
        description: 'Increase in inventory turnover rate',
        icon: 'repeat'
      }
    ],
    tools: [
      { name: 'Python', icon: 'python', category: 'language' },
      { name: 'Plotly', icon: 'chart', category: 'visualization' },
      { name: 'Optimization', icon: 'settings', category: 'framework' }
    ]
  }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}