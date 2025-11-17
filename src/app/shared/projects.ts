import { Project} from './models/project.model';

export const projects : Project[] = [
    {
        id: "1",
        title: "Transakt microservices",
        description: "Transakt is an event-driven microservices banking system, built in Spring Boot, and the Spring cloud projects, alongside Keycloak for Authentication with OAuth2.0 and Kafka + Spring Cloud Stream for asynchronous messaging between services without tight coupling.",
        urls: [
            {
                name: "Backend repository",
                url: "https://github.com/ChxrlieExe33/transakt-monorepo"
            }
        ]
    },
    {
        id: "2",
        title: "Social-Konnect",
        description: "Social Konnect is a social media platform I developed using Spring Boot and Angular, it has full JWT authentication, sign up with email verification, forgot password functionality and more. The application can be used similarly to instagram or twitter, it features users, posts, likes, comments, follows, etc. I optimised functionalities with asynchronous event listeners and handled queries of entities with multiple relationships in efficient ways.",
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
