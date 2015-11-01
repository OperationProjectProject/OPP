#JSI CAPSTONE
![Operation Project Project](https://d13yacurqjgara.cloudfront.net/users/597558/screenshots/1998465/comp-2.gif)

##MVP:
A web platform for members of our community to showcase their work.

##USER STORIES:
* **Prospective Employer**
>"I need an easy way to browse the hottest tech talent in town."

* **Code School Student**
>"I'm looking to showcase my projects and skills."

* **Prospective Code School Student**
>"I want to go to a coding bootcamp, but am not sure which one to pick.
>It would be nice to check out some of the work that code school students are doing in my area."

##WIREFRAMES:
![Operation Project Project](http://i.imgur.com/VM7hCLq.png)

##DATA MODELS:
* **Profile Object**
```javascript
  {
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
{
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

##ROUTES:

| verb   | URI pattern                   |
| ------ | ----------------------------- |
| GET    | /                             |
| GET    | /test                         |
| GET    | /projects                     |
| GET    | /profiles                     |
| GET    | /auth/github                  |
| GET    | /logout                       |
| GET    | /user_profile                 |
| PUT    | /user_profile                 |
| DELETE | /user_profile                 |
| GET    | /user_project/:project_url_id |
| POST   | /user_project/:project_url_id |
| PUT    | /user_project/:project_url_id |
| DELETE | /user_project/:project_url_id |

##CONTACT OUR TEAM:
[Matt](https://github.com/mkelley2)
[Pat](http://patrickharry.com)
