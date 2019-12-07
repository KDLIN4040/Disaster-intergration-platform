# -*- coding: utf-8 -*-
import sched, time
import pandas as pd

schedule = sched.scheduler ( time.time, time.sleep )

#被週期性觸發的函數
def func():
    url = 'https://www.nhi.gov.tw/SysService/SevereAcuteHospital.aspx'
    df = pd.read_html(url)[1]

    print(pd.read_html(url)[1])

    df.to_excel('../excel_output.xls')

def perform1(inc):
    schedule.enter(inc,0,perform1,(inc,))
    func()    # 需要週期執行的函數

def mymain():
    schedule.enter(0,0,perform1,(5,)) # inc 幾秒做一次週期

if __name__=="__main__":
    mymain()
    schedule.run()  # 開始運行，直到計劃時間隊列變成空為止