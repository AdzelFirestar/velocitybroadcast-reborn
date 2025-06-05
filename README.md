## VelocityBroadcast Reborn
The new and improved version of my old popular plugin called "Velocity Broadcast". The best known and lightweight broadcasting plugin for any network to use.  
  
# Introduction
Welcome to the GitHub repo and source code for the plugin VelocityBroadcast Reborn. This is a complete rewrite of my previous VelocityBroadcast plugin. I reworked and rebuilt the plugin from scratch. Due to the fact a ton of promised features sadly did not work out correctly. The biggest complaint being permissions. Well, I did it. I was able to fix a few old grievances and even add some new features. So without further ado, the information regarding VelocityBroadcast Reborn!

VelocityBroadcast Reborn is a unique and lightweight plugin that allows people with specific permission nodes/groups with permission nodes assigned to LuckPerms for Velocity to broadcast a message across the entire network. This is useful for events, maintenance announcements, and more. I do plan to add more features one day, but for now this is what we have. Light, simple, and easy to use. Please use the Issue Tracker above to report any issues or feedback about the plugin.

# Dependencies
- The latest stable build of Velocity
- A main hub/lobby server (Preferably running Paper, but it should work on any type of server. Including modded)
- A secondary/multiple servers on the network to receive full compatibility

# Setup
1. Download the latest version from Spigot or the Releases page on the right
2. Upload the plugin file to your ***Proxy's*** plugin folder (Do not upload it to the hub server's plugin folder)
3. Restart the proxy
4. In the console of your proxy server, run the following command(s) depending on your preferred usage. (4a for users specifically, 4b for groups)
4a. lpv user {username} permission set {permission node} true {context (optional)}
4b. lpv group {group} permission set {permission node} true {context (optional)}
4c. Or you can do it in GUI mode with the command "lpv editor"
5. Restart your proxy again
6. Now the setup is complete, enjoy!

# Commands and Permissions
- /vb - When typed on its own will show the help page - No permission needed
- /vb {message} - When typed and paired with a message, it will send a message across all servers on a network (Legacy Color Codes and MiniMessage compatible) - vb.broadcast
- /vp prefix {new prefix} - This allows whoever has the required permission to change the prefix in front of the message broadcasted - vb.admin
- /vb reload - Allows people with the correct permission node to reload the config if it was edited manually - vb.admin  
***Currently due to the limitations of Velocity, you can not run the commands while being opped. You MUST have the correct permission nodes for it to work.***
