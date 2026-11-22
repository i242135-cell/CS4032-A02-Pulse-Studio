export const classes=[
{id:'strength-foundations',name:'Strength Foundations',category:'Strength',level:'Beginner',minutes:45,price:1600,seats:8,time:'Mon 6:00 PM',description:'Learn core lifting movements with a coach.'},
{id:'power-hour',name:'Power Hour',category:'Strength',level:'Intermediate',minutes:60,price:1900,seats:5,time:'Tue 7:00 PM',description:'Progressive full body strength circuits.'},
{id:'mobility-reset',name:'Mobility Reset',category:'Mobility',level:'All levels',minutes:45,price:1400,seats:10,time:'Wed 6:00 PM',description:'Improve comfortable range of movement.'},
{id:'sunrise-yoga',name:'Sunrise Yoga',category:'Yoga',level:'All levels',minutes:60,price:1500,seats:7,time:'Thu 7:00 AM',description:'A calm guided start to the day.'},
{id:'boxing-basics',name:'Boxing Basics',category:'Boxing',level:'Beginner',minutes:50,price:1700,seats:6,time:'Fri 6:00 PM',description:'Footwork and pad skills for newcomers.'},
{id:'cardio-circuit',name:'Cardio Circuit',category:'Cardio',level:'All levels',minutes:45,price:1600,seats:9,time:'Sat 9:00 AM',description:'Intervals with adaptable intensity.'},
{id:'core-control',name:'Core Control',category:'Strength',level:'Beginner',minutes:40,price:1300,seats:8,time:'Mon 7:00 PM',description:'Build stability and core confidence.'},
{id:'flow-and-stretch',name:'Flow & Stretch',category:'Yoga',level:'Beginner',minutes:50,price:1400,seats:12,time:'Tue 8:00 AM',description:'Gentle flowing movement and stretching.'},
{id:'kettlebell-lab',name:'Kettlebell Lab',category:'Strength',level:'Intermediate',minutes:55,price:1800,seats:4,time:'Thu 6:00 PM',description:'Technique-led kettlebell training.'},
{id:'weekend-recovery',name:'Weekend Recovery',category:'Mobility',level:'All levels',minutes:60,price:1500,seats:10,time:'Sun 10:00 AM',description:'Unwind with guided mobility work.'}];
export async function loadClasses(fail=false){await new Promise(r=>setTimeout(r,350));if(fail)throw new Error('Demo loading failure');return classes}
