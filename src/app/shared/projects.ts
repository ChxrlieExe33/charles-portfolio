import { Project} from './models/project.model';

export const projects : Project[] = [
    {
        id: "1",
        title: "Social-Konnect",
        description: "This is my first project using Spring Boot, it has full JWT based authentication for stateless functionality, users can share posts, interact with posts, interact with other users, etc.",
        urls: [
            {
                name : "Backend repository",
                url: "https://github.com/ChxrlieExe33/social_konnect_backend"
            }
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
