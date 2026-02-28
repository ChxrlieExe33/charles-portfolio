import { Project} from './models/project.model';

export const projects : Project[] = [
    {
        id: "1",
        title: "Cloudary",
        description : "Cloudary is a cloud-based file storage platform I built to improve my cloud skills and learn Terraform",
        bulletPoints: [
            "File storage in S3 with pre-signed URLs for serving files to users",
            "File access permission granting/revoking",
            "Full infrastructure written in Terraform for reproducible environments",
            "Multi-AZ deployment of resources for high-availability and failover",
            "Elasticache (redis) cluster for caching",
            "Dockerised backend running on ECS for scalable but simple to manage deployments"
        ], 
        urls : [
            {
                name : "Backend & infrastructure repository",
                url: "https://github.com/ChxrlieExe33/cloudary"
            }
        ],
        images: [
            "/cloudary_aws.png"
        ]
    },
    {
        id: "2",
        title: "Transakt microservices",
        description: "Transakt is an event-driven microservices backend built in Springboot.",
        bulletPoints: [
            "Event driven communication with Kafka + Spring cloud stream",
            "Keycloak for centralised auth management with OAuth and OIDC",
            "Spring cloud gateway server for secure request routing while handling cross cutting concerns",
            "Spring cloud config server for centralised config management",
            "Netflix eureka for service discovery"
        ],
        urls: [
            {
                name: "Backend repository",
                url: "https://github.com/ChxrlieExe33/transakt-monorepo"
            }
        ],
        images: [
            "/transakt-microservices.png"
        ]
    },
    {
        id: "3",
        title: "Social-Konnect",
        description: "Social Konnect is a social media platform built with Springboot & Angular.",
        bulletPoints: [
            "Full custom JWT authentication using Spring Security",
            "User registration with email verification",
            "Asynchronous event listeners for decoupled side-effects",
            "File upload functionality with mime type checks to prevent malicious uploads",
            "Unit testing with JUnit5 & Mockito"
        ],
        urls: [
            {
                name : "Backend repository",
                url: "https://github.com/ChxrlieExe33/social-konnect-backend"
            },
            {
                name: "Frontend repository",
                url: "https://github.com/ChxrlieExe33/social-konnect-front"
            }
        ],
        images: [
            "/social-ui.jpg",
            "/search-page-better.png"
        ]
    }
]
