const convertTime = (t) => {
          const nums = t.split(':').map((str) => Number(str))
          return (nums[0]*100 + nums[1])
     }

const splitDays = (days) => {
     const replaced = days.replace('M', "$M").replace("T", "$T").replace("W", "$W").replace("F", "$F").replace("S", "$S")
     const days1 = days.split("$")
     return days1
}

export const timeAndDay = (time) => {
     const days = splitDays(time.split(' ')[0])
     const [start, end] = time.split(' ')[1].split('-')
     const [startConverted, endConverted] = [convertTime(start), convertTime(end)] 
     return [days, startConverted, endConverted]
}

export const checkConflict = (time1, time2) => {
     const [days1, start1, end1] = timeAndDay(time1)
     const [days2, start2, end2] = timeAndDay(time2)
     if (days1.filter((day) => days2.includes(day)).length === 0) return 0;

     if (((start1 <= start2) && (start2 <= end1)) || ((start1 <= end2) && (end2 <= end1))) return 1;
     return 0;

}
