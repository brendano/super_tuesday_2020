# ~ % python parse2.py > d2.csv
library(dplyr)
d=read.csv("d2.csv"); d$condcert=rowSums(d[,5:8]^2); d = d %>% filter(condcert>0); d$bs=d$biden-d$sanders
x=d %>% group_by(attrib,value) %>% summarise(allstatebs=mean(bs)) %>% group_by(attrib) %>% summarise(sd_over_attrib=sd(allstatebs))
full_join(d %>% group_by(attrib,value) %>% summarise(allstatebs=mean(bs)), x) %>% arrange(-sd_over_attrib,allstatebs) %>% print(n=999)

