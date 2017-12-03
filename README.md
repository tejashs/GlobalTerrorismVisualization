# GlobalTerrorismVisualization
This repository is for the Visualization Project for CS  6630.
1st Milestone - RELEASE FEATURES
- We have the entire dataset at https://www.kaggle.com/START-UMD/gtd/data
- Since its a huge file we are not uploading the entire data here.
- We have done a subset for USA-specific as of now.
- We would be extracting a similar subset of data for other countries from the larger dataset.

Features Done :
- We have a USA map that depicts the attacks on USA over the years.
- The map is interactable. There are tool tips. And the it further drills down on summary and details of the attack.
- There is a year chart that is used to filter data.
- The year chart is also capable of Brushing.
- We also have bar charts related to the top 20 countries where there were maximum number of attacks.
- These bar charts have different metrics are is interactable as well.
--------------------------------------------------------------------------------------------------------------------
After 1st website
URL to Website - https://tejashs.github.io/
Link to screen cast - https://www.dropbox.com/s/8sryngywcw5dq7h/Project_Video.mp4?dl=0
Libraries - D3 tip and bootstrap. 
Everything else is our code.
Our code is in public


Non obvious features- region in the map is clickable
                    - clicking on map updates drop down menu- list of countries
                    - selecting a country from the drop down menu plots a line grpah
                    -line grpah has a node which is clickable- A wordcloud and lists are displayed
                    -Some countries may not have the information and the word cloud is empty

