## Project: Issue Tracking App

This week, you're going to use [Backbone](http://backbonejs.org/) to build an Issue-Tracking (or "Task-Management") browser app.

### Phase 1: Client-Only

In the first phase, your app will be strictly client-side, running entirely in the browser as a single HTML page (plus javascript modules).  As demonstrated in [this template](main.html), your HTML file will need to include several modules:

1. jQuery
2. either Underscore or Lodash
3. Backbone
4. any js files implementing your Models and Collections
5. any js files implementing your Views
6. any CSS you need to style your views
7. A [main.js](main.js) file which triggers the components to start the app

Some template files are included in this repo to get you started.


## Design Proposal

All details of this proposal may be customized, including the names of the models, attributes, and views listed below.

### Backbone Models

* `UserModel`
Each user model should have at minimum a `username` attribute, but you may add other attributes as needed.
Each username should be unique.

* `TaskModel`
A task (or "issue") is a job needing to be done by someone on the team.
Each task has the following attributes:
	* `title`: a brief summary of the task or issue
	* `description`: additional details
	* `creator`: the username of the person who created it
	* `assignee`: the username of the person assigned to complete the task.  It will be blank or undefined initially.
	* `status`: one of four possible states a task may be in.
		1. "Unassigned" (or "Available"): the task has been created (and has a `creator`) but is not yet assigned to a user (no `assignee`).
		2. "Assigned": the task has been claimed by a user (the `assignee`).
		3. "In Progress": the assignee has begun but not yet finished the task.
		4. "Done": The assignee has finished the task.

In this version, let's keep the rules of interaction simple:

1. Any user may create a new task, which starts out unassigned.

2. Any user may "claim" an unassigned task by setting it to another status, or advance the progress of a task already claimed.

3. The assignee may choose to give up a task and return it to "unassigned" status.


### Backbone Views

There is considerable flexibility in an interface which affords the three interactions above.  But as a starting design, you will probably want six different Backbone views:

* `TaskView`:
	
	This view displays a single task, showing its title, description, status, creator, and assignee (if any).  Each TaskView should include one or more controls (e.g. a `select` or set of `button`s) to change its state.
	
	Each task view will be associated with exactly one task model, although a model may have more than one view instance.

* `CreateTaskView`:
	
	You'll need a view with input fields for the user to fill in when creating a new task.  It should probably have both a `create` and `cancel` button.  The location and format of the view is up to you.

* `UnassignedTasksView`:

	This view should include multiple `TaskView`s, each showing one of the unassigned tasks created by any user.  The view should include a "Create New Task" button which triggers a `CreateTaskView`, allowing the user to create a new task.

* `UserTasksView`:
	
	This view should include multiple `TaskView`s, one for each task for which the user is either the `creator` or `assignee`.

* `UserView`:

	This view contains everything the user sees once logged in.  It should include both an `UnassignedTasksView` for claiming or creating new tasks and a `UserTasksView` for tracking the status of all tasks associated with the user.

	It should also include a "logout" button which replaces the `UserView` with the `LoginView`.

* `LoginView`:

	This is the initial view shown when launching the app (i.e. opening the `html` file in a browser).  It should let the user either log in by choosing from a list of known user names, or create a new user name.  Feel free to add some form of user authentication later, but keep things simple for now.

Below is a rough map of how the 6 views are organized:

![](http://portlandcodeschool.github.io/jse-fall15-9/BackboneViewMap.svg)

### Phase 2: Server + Router

Watch this space!

