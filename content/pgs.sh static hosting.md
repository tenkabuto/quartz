---
title: pgs.sh static hosting
date: 2023-11-12
modified: 2023-11-12
---

<https://pgs.sh/>
Found it here: <https://news.ycombinator.com/item?id=37392013>
Official closed beta announcement: <https://hey.prose.sh/pgs>
- Check this blog and the IRC for updates

Backing up ssh keys, for use with pgs.sh and #website hosting

## Initial start
it didn't load for a moment, either at initial setup or at first rsync

```shell
  pgs.sh                                                   
                                                            
  A zero-dependency static site hosting service for hackers.
                                                            
  To get started, enter a username.                         
  Then create a folder locally (e.g. ~/sites).              
  Finally, send your files to us:                           
                                                            
  rsync ~/sites/* pgs.sh:/<project_name>                    
                                                            
  Enter a username                                          
                                                            
  > tacticaltypos                                           
                  
```

Error below was likely because I was lacking permissions to push to the service --- my account likely wasn't invited to the closed beta yet

```shell
rsync ~/Documents/quartz/public/* pgs.sh:/quartz
you do not have access to this service
```

## Using it
Various commands the service: <https://erock.pastes.sh/pgs-cmds.md>

For now, use this command instead:

```shell
scp -r ~/Documents/quartz/public/* pgs.sh:/quartz
```

Or possibly

```shell
scp -r ~/Documents/quartz/public/* tacticaltypos@pgs.sh:/quartz
```

### Updated
```shell
rsync -vr ~/Dropbox/quartz/public/ pgs.sh:/quartz
```