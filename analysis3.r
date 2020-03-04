d=read_csv("d2.csv"); d$condcert=rowSums(d[,5:8]^2); d = d %>% filter(condcert>0); d$bs=d$biden-d$sanders; d$value=d$value %>% str_replace("Agrees with you on major issues","Agr. w. you on issues") %>% str_replace("Can beat Donald Trump","Can beat Trump") %>% str_replace("Independent or something else","Indep. or sth. else") %>% str_replace("Moderate or conservative", "Moderate or cons.")

stot=read_excel("state_totals.xlsx",col_names=c('total','state','bla'))[,1:2]

e=full_join(d,stot) %>% group_by(attrib,value) %>% summarise(mar=weighted.mean(bs,total),biden=weighted.mean(biden,total),sanders=weighted.mean(sanders,total),totshare=(share/100) %*% total / sum(total))

x=e %>% mutate(m=(mar %*% totshare), sd=sqrt(((mar-m)^2) %*% totshare  )) %>% mutate(m=NULL) %>% arrange(-sd,mar)

print(x,n=999)

