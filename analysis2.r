# version with proper weighting
d=read_csv("d2.csv"); d$condcert=rowSums(d[,5:8]^2); d = d %>% filter(condcert>0); d$bs=d$biden-d$sanders
stot=read_excel("state_totals.xlsx",col_names=c('total','state','bla'))[,1:2]
e=full_join(d,stot) %>% group_by(attrib,value) %>% summarise(allstatebs=(bs %*% total)/sum(total),totshare=(share/100) %*% total / sum(total))
x=e %>% mutate(m=(allstatebs %*% totshare), sd=sqrt(((allstatebs-m)^2) %*% totshare  )) %>% mutate(m=NULL)
e %>% full_join(x) %>% arrange(-sd,allstatebs) %>% print(n=999)

