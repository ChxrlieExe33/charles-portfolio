import { Project} from './models/project.model';

export const projects : Project[] = [
    {
        id: "1",
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
    },
    {
        id: "2",
        title: "My-Portfolio",
        description: "This is my portfolio",
        urls: [
            {
                name: "Frontend repository",
                url: "https://github.com/ChxrlieExe33/charles-portfolio"
            }
        ]
    }
]
