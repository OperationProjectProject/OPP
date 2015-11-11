#JSI CAPSTONE

##Checkout the live site
[demoday.ninja](http://DemoDay.ninja)

##MVP
A web platform for members of our community to showcase their work.

##USER STORIES
* **Prospective Employer**
>"I need an easy way to browse the hottest tech talent in town."

* **Code School Student**
>"I'm looking to showcase my projects and skills."

* **Prospective Code School Student**
>"I want to go to a coding bootcamp, but am not sure which one to pick.
>It would be nice to check out some of the work that code school students are doing in my area."

##WIREFRAMES
![Operation Project Project](http://i.imgur.com/VM7hCLq.png)

##Orchestrate Data Models
###Profile Object
```javascript
  { "active": true ,
    "github_api_data": {
      "github_id": "",
      "github_email": "",
      "github_display_name": "",
      "github_url": "",
      "github_avatar": "",
      "github_username": ""
    },
    "project_reference": [] ,
    "profile_content": {
      "img_urls": {
        "profile_img": "" ,
        "cover_photo": "" ,
        "hero_img": "" ,
        "action_shot": ""
      },
      "social_urls": {
        "personal": "",
        "linkedin": "",
        "twitter": ""
      },
      "editable_text": {
        "name": "",
        "title": "" ,
        "url_id": "" ,
        "skills": [] ,
        "tools": [] ,
        "q_and_a" : {
            "js_tidbit": "" ,
            "job_hope": "" ,
            "politics": ""
        }
      },
      "checkbox_content" : {
        "work_status": []
      }
    }
  }
```
* **Project Object**
```javascript
{ "active": true ,
  "owner_reference": [] ,
  "project_content": {
     "title": "" ,
     "project_url_id": "" ,
     "mvp": "" ,
     "img_urls": {
       "main_img": ""
     } ,
     "out_link_urls" : {
       "github_repo_url": "" ,
       "live_project_site_url": ""
     } ,
     "tech_used": []
   }
}
```

##ROUTES

###View Routing
| use case                  | verb     | URI pattern   |
|---------------------------|----------|---------------|
| site root, landing page   | GET      | /             |
| run client mocha tests    | GET      | /test         |
| authenticate user session | GET      | /auth/github  |
| end a user session        | GET      | /logout       |

###API
| Backbone.js Object | method     | HTTP verb   | Express URI pattern |
|--------------------|------------|-------------|---------------------|
| profile collection | .fetch()   | GET         | /profiles           |
| profile model      | .save()    | PUT         | /profiles/:id       |
| profile model      | .destroy() | DELETE      | /profiles/:id       |
| project collection | .fetch()   | GET         | /projects           |
| project model      | .create()  | POST        | /projects           |
| project model      | .save()    | PUT         | /projects/:id       |
| project model      | .destroy() | DELETE      | /projects/:id       |

##RESOURCES USED
* Twitter Bootstrap
* Backbone.js
* Express.js
* Node.js / npm
* Passport js
* Github API
* Orchestrate.io

##CONTACT OUR TEAM
[Matt Kelley](https://github.com/mkelley2)
|
[Pat Harry](http://patrickharry.com)
