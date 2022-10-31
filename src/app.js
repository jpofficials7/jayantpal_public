const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app = express();
app.use(cors());
app.get("/skills_api",(req,res)=>{
    res.json([
        
        {
            id:1,
            title:"Web Development",
            image:"https://www.pexels.com/photo/abstract-business-code-coder-270348/",
            description: "Diligent software engineer with 1+ years of experience in commercial application and software development,Building and maintenance of Web Applications by using a variety of coding languages."
        }
        ,
        {
            id:2,
            title:"Software Development",
            image:"https://www.pexels.com/photo/data-codes-through-eyeglasses-577585/",
            description: "Expertise in design,development and maintenance of software Systems.Proficient in various platforms,languages and tools.Experienced with cutting-edge development tools and procedures.Able to effectively self-manage during independed projects,as well as collaborate as part of a productive team."
        },
        {
            id:3,
            title:"Front-End Development",
            image:"https://www.pexels.com/photo/love-people-woman-heart-11035471/",
            description: "Equipped with Front-End technologies like HTML,CSS and javascript and framework such as React.Posses the end-to-end understanding of React core concepts and workflow of React with state management tool such as redux and redux toolkit."
        },
        {
            id:4,
            title:"Back-End Development",
            image:"https://www.pexels.com/photo/man-love-people-woman-11035380/",
            description: "Complete Knowledge of backend such as Servers,APIs,authentication,Registration and Database integrations.Equipped with Server Side technologies (Nodejs,Expressjs,Mongodb and mongoose)."
        },
        
        
        {
            id:5,
            title:"Data Structures and Algorithm",
            image:"https://www.pexels.com/photo/hands-on-a-laptop-keyboard-5483071/",
            description: "Understanding of Various data structures and algorithm and being able to solve complex problems."
        },
        {
            id:6,
            title:"FrontEnd Design",
            image:"https://www.pexels.com/photo/silver-imac-displaying-collage-photos-1779487/",
            description: "Used various frontend design library during my tenure as a full stack developer such as Bootstrap,Material-UI,Styled-Components."
        }
        ,
        {
            id:7,
            title:"Git-Github",
            image:"https://www.pexels.com/photo/man-love-people-woman-11035539/",
            description: "Understanding and Skills on Version control system such as git and github."
        }


    ]);

});

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});