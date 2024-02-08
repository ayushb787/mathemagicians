import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {


  const trainData = [
    {
      "Date": "2023-07-31",
      "StoreName": "Akola",
      "EnergyConsumed": 401.8000000000029,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Thane",
      "EnergyConsumed": 552.9499999999998,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Solapur",
      "EnergyConsumed": 38.200000000004366,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Satara",
      "EnergyConsumed": 521.9166666666697,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Sangli",
      "EnergyConsumed": 484.6499999999942,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Palghar",
      "EnergyConsumed": 486.2000000000007,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Nashik",
      "EnergyConsumed": 390.4166666666715,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Pune",
      "EnergyConsumed": 322,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Nagpur",
      "EnergyConsumed": 340.58333333333394,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Mumbai",
      "EnergyConsumed": 196.29999999999563,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 391.23333333332994,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 670.8499999999913,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Gondia",
      "EnergyConsumed": 256.9833333333372,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Amravati",
      "EnergyConsumed": 297.3833333333314,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-07-31",
      "StoreName": "Nanded",
      "EnergyConsumed": 257.59999999999127,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Nashik",
      "EnergyConsumed": 347.7500000000029,
      "PeopleVisited": 355
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Thane",
      "EnergyConsumed": 536.6499999999996,
      "PeopleVisited": 155
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Solapur",
      "EnergyConsumed": 34.6833333333343,
      "PeopleVisited": 285
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Satara",
      "EnergyConsumed": 521.1833333333325,
      "PeopleVisited": 359
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Sangli",
      "EnergyConsumed": 497.2000000000044,
      "PeopleVisited": 124
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Palghar",
      "EnergyConsumed": 508.4499999999971,
      "PeopleVisited": 542
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Nanded",
      "EnergyConsumed": 233.71666666667443,
      "PeopleVisited": 110
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Pune",
      "EnergyConsumed": 350.56666666665114,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Mumbai",
      "EnergyConsumed": 201.90000000000143,
      "PeopleVisited": 419
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 412.8666666666686,
      "PeopleVisited": 253
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 543.7666666666773,
      "PeopleVisited": 138
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Gondia",
      "EnergyConsumed": 255.98333333332263,
      "PeopleVisited": 475
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Amravati",
      "EnergyConsumed": 337.3166666666657,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Akola",
      "EnergyConsumed": 404.7999999999993,
      "PeopleVisited": 166
    },
    {
      "Date": "2023-08-01",
      "StoreName": "Nagpur",
      "EnergyConsumed": 338.76666666666824,
      "PeopleVisited": 121
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Thane",
      "EnergyConsumed": 557,
      "PeopleVisited": 162
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Solapur",
      "EnergyConsumed": 13.249999999992724,
      "PeopleVisited": 325
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Satara",
      "EnergyConsumed": 503.5333333333329,
      "PeopleVisited": 321
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Sangli",
      "EnergyConsumed": 518.0499999999956,
      "PeopleVisited": 111
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Pune",
      "EnergyConsumed": 316.2833333333547,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Palghar",
      "EnergyConsumed": 464.43333333333794,
      "PeopleVisited": 580
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Nashik",
      "EnergyConsumed": 404.35,
      "PeopleVisited": 488
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Nanded",
      "EnergyConsumed": 242.91666666665697,
      "PeopleVisited": 128
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Mumbai",
      "EnergyConsumed": 211.59999999999852,
      "PeopleVisited": 604
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 401.9333333333343,
      "PeopleVisited": 239
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 605,
      "PeopleVisited": 95
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Gondia",
      "EnergyConsumed": 223.7333333333372,
      "PeopleVisited": 508
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Amravati",
      "EnergyConsumed": 295.6999999999971,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Akola",
      "EnergyConsumed": 401.3999999999978,
      "PeopleVisited": 166
    },
    {
      "Date": "2023-08-02",
      "StoreName": "Nagpur",
      "EnergyConsumed": 322.0499999999993,
      "PeopleVisited": 166
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Nashik",
      "EnergyConsumed": 388.6000000000001,
      "PeopleVisited": 420
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Thane",
      "EnergyConsumed": 556.0166666666664,
      "PeopleVisited": 296
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Solapur",
      "EnergyConsumed": 34.16666666667152,
      "PeopleVisited": 283
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Satara",
      "EnergyConsumed": 441.7999999999993,
      "PeopleVisited": 285
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Sangli",
      "EnergyConsumed": 444.0766666666677,
      "PeopleVisited": 143
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Palghar",
      "EnergyConsumed": 450.56666666666206,
      "PeopleVisited": 336
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Nanded",
      "EnergyConsumed": 235.75,
      "PeopleVisited": 99
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Pune",
      "EnergyConsumed": 321.3999999999796,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Mumbai",
      "EnergyConsumed": 211.59999999999852,
      "PeopleVisited": 568
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Akola",
      "EnergyConsumed": 421.2333333333336,
      "PeopleVisited": 168
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Amravati",
      "EnergyConsumed": 303.75,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Gondia",
      "EnergyConsumed": 222.09999999999852,
      "PeopleVisited": 620
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Nagpur",
      "EnergyConsumed": 336.1833333333325,
      "PeopleVisited": 175
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 384.0499999999884,
      "PeopleVisited": 279
    },
    {
      "Date": "2023-08-03",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 714.2833333333328,
      "PeopleVisited": 127
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Palghar",
      "EnergyConsumed": 480.6666666666679,
      "PeopleVisited": 440
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Thane",
      "EnergyConsumed": 549.3500000000013,
      "PeopleVisited": 222
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Solapur",
      "EnergyConsumed": 38.96666666666715,
      "PeopleVisited": 305
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Satara",
      "EnergyConsumed": 555.8333333333339,
      "PeopleVisited": 299
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Sangli",
      "EnergyConsumed": 473.1166666666686,
      "PeopleVisited": 164
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Pune",
      "EnergyConsumed": 312.9000000000088,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Nashik",
      "EnergyConsumed": 398.9,
      "PeopleVisited": 525
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Nanded",
      "EnergyConsumed": 241.41666666665697,
      "PeopleVisited": 68
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Nagpur",
      "EnergyConsumed": 321.01666666666824,
      "PeopleVisited": 162
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Mumbai",
      "EnergyConsumed": 218.90000000000143,
      "PeopleVisited": 570
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 425.58333333334303,
      "PeopleVisited": 268
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 613.849999999984,
      "PeopleVisited": 142
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Gondia",
      "EnergyConsumed": 221.09999999999852,
      "PeopleVisited": 547
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Amravati",
      "EnergyConsumed": 303.8500000000058,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-04",
      "StoreName": "Akola",
      "EnergyConsumed": 400.4666666666708,
      "PeopleVisited": 149
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Solapur",
      "EnergyConsumed": 43.41666666666424,
      "PeopleVisited": 522
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Satara",
      "EnergyConsumed": 561.7833333333328,
      "PeopleVisited": 265
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Sangli",
      "EnergyConsumed": 541.4000000000015,
      "PeopleVisited": 99
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Pune",
      "EnergyConsumed": 332.70000000001164,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Palghar",
      "EnergyConsumed": 521.0999999999985,
      "PeopleVisited": 380
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Nashik",
      "EnergyConsumed": 410.333333333333,
      "PeopleVisited": 650
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Thane",
      "EnergyConsumed": 577.1999999999989,
      "PeopleVisited": 132
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Nanded",
      "EnergyConsumed": 256.2500000000145,
      "PeopleVisited": 83
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Mumbai",
      "EnergyConsumed": 223.59999999999852,
      "PeopleVisited": 604
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 439.0666666666657,
      "PeopleVisited": 306
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 797.1833333333416,
      "PeopleVisited": 109
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Gondia",
      "EnergyConsumed": 239.8000000000029,
      "PeopleVisited": 495
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Amravati",
      "EnergyConsumed": 339.4333333333343,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Akola",
      "EnergyConsumed": 436.2999999999956,
      "PeopleVisited": 209
    },
    {
      "Date": "2023-08-05",
      "StoreName": "Nagpur",
      "EnergyConsumed": 346.8999999999978,
      "PeopleVisited": 162
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Thane",
      "EnergyConsumed": 584.7166666666672,
      "PeopleVisited": 248
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Solapur",
      "EnergyConsumed": 39.25000000000728,
      "PeopleVisited": 841
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Satara",
      "EnergyConsumed": 592.5833333333339,
      "PeopleVisited": 481
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Sangli",
      "EnergyConsumed": 545.6999999999971,
      "PeopleVisited": 158
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Pune",
      "EnergyConsumed": 338.9666666666453,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Palghar",
      "EnergyConsumed": 511.4499999999971,
      "PeopleVisited": 701
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Nashik",
      "EnergyConsumed": 416.9666666666669,
      "PeopleVisited": 1228
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Nanded",
      "EnergyConsumed": 253.7833333333256,
      "PeopleVisited": 164
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Mumbai",
      "EnergyConsumed": 9529.579999999994,
      "PeopleVisited": 1257
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 447.8000000000029,
      "PeopleVisited": 271
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 821.9166666666642,
      "PeopleVisited": 200
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Gondia",
      "EnergyConsumed": 237.59999999999852,
      "PeopleVisited": 1208
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Amravati",
      "EnergyConsumed": 297.0666666666657,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Akola",
      "EnergyConsumed": 454.76666666667006,
      "PeopleVisited": 285
    },
    {
      "Date": "2023-08-06",
      "StoreName": "Nagpur",
      "EnergyConsumed": 357.6000000000022,
      "PeopleVisited": 274
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Nashik",
      "EnergyConsumed": 405.9833333333336,
      "PeopleVisited": 1302
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Thane",
      "EnergyConsumed": 552.6833333333343,
      "PeopleVisited": 299
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Solapur",
      "EnergyConsumed": 39.71666666665988,
      "PeopleVisited": 1062
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Satara",
      "EnergyConsumed": 548.5999999999985,
      "PeopleVisited": 638
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Sangli",
      "EnergyConsumed": 517.6000000000058,
      "PeopleVisited": 322
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Palghar",
      "EnergyConsumed": 446.5833333333394,
      "PeopleVisited": 737
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Nanded",
      "EnergyConsumed": 246.88333333334597,
      "PeopleVisited": 172
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Pune",
      "EnergyConsumed": 328.2166666666744,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Mumbai",
      "EnergyConsumed": 210.7000000000044,
      "PeopleVisited": 2409
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Akola",
      "EnergyConsumed": 412.9500000000007,
      "PeopleVisited": 393
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Amravati",
      "EnergyConsumed": 289.29999999999563,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Gondia",
      "EnergyConsumed": 237.16666666666424,
      "PeopleVisited": 1844
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Nagpur",
      "EnergyConsumed": 340.75,
      "PeopleVisited": 329
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 412.25,
      "PeopleVisited": 562
    },
    {
      "Date": "2023-08-07",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 779.8666666666686,
      "PeopleVisited": 114
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Palghar",
      "EnergyConsumed": 519.8000000000029,
      "PeopleVisited": 334
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Thane",
      "EnergyConsumed": 555.3499999999985,
      "PeopleVisited": 120
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Solapur",
      "EnergyConsumed": 37.0666666666657,
      "PeopleVisited": 250
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Satara",
      "EnergyConsumed": 577.9000000000015,
      "PeopleVisited": 347
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Sangli",
      "EnergyConsumed": 506.2999999999956,
      "PeopleVisited": 94
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Pune",
      "EnergyConsumed": 307.1666666666715,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Nashik",
      "EnergyConsumed": 405.4666666666667,
      "PeopleVisited": 454
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Nanded",
      "EnergyConsumed": 254.23333333332263,
      "PeopleVisited": 100
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Nagpur",
      "EnergyConsumed": 320.34999999999854,
      "PeopleVisited": 163
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Mumbai",
      "EnergyConsumed": 225.39999999999415,
      "PeopleVisited": 553
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 399.7833333333256,
      "PeopleVisited": 231
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 760.4000000000087,
      "PeopleVisited": 131
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Gondia",
      "EnergyConsumed": 218.31666666667297,
      "PeopleVisited": 562
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Amravati",
      "EnergyConsumed": 289.29999999999563,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-08",
      "StoreName": "Akola",
      "EnergyConsumed": 404.683333333327,
      "PeopleVisited": 133
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Pune",
      "EnergyConsumed": 322.1999999999971,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Sangli",
      "EnergyConsumed": 513.7000000000044,
      "PeopleVisited": 135
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Palghar",
      "EnergyConsumed": 487.5333333333292,
      "PeopleVisited": 413
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Solapur",
      "EnergyConsumed": 38.55000000000291,
      "PeopleVisited": 225
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Thane",
      "EnergyConsumed": 436.25,
      "PeopleVisited": 133
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Satara",
      "EnergyConsumed": 592.5999999999985,
      "PeopleVisited": 256
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Nashik",
      "EnergyConsumed": 418.6333333333332,
      "PeopleVisited": 501
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Nanded",
      "EnergyConsumed": 245.59999999999127,
      "PeopleVisited": 103
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Nagpur",
      "EnergyConsumed": 323.21666666666897,
      "PeopleVisited": 154
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Mumbai",
      "EnergyConsumed": 221.5,
      "PeopleVisited": 635
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 424.9666666666744,
      "PeopleVisited": 180
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 734.5999999999913,
      "PeopleVisited": 123
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Gondia",
      "EnergyConsumed": 221.91666666666424,
      "PeopleVisited": 578
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Amravati",
      "EnergyConsumed": 287.9833333333372,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-09",
      "StoreName": "Akola",
      "EnergyConsumed": 402.1000000000058,
      "PeopleVisited": 155
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Thane",
      "EnergyConsumed": 528.5833333333339,
      "PeopleVisited": 117
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Solapur",
      "EnergyConsumed": 42.19999999999709,
      "PeopleVisited": 251
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Satara",
      "EnergyConsumed": 564.4166666666624,
      "PeopleVisited": 345
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Sangli",
      "EnergyConsumed": 538.7999999999956,
      "PeopleVisited": 120
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Pune",
      "EnergyConsumed": 329.2333333333372,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Palghar",
      "EnergyConsumed": 545.4000000000015,
      "PeopleVisited": 384
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Nashik",
      "EnergyConsumed": 397.3166666666666,
      "PeopleVisited": 544
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Nanded",
      "EnergyConsumed": 257.2333333333372,
      "PeopleVisited": 81
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Nagpur",
      "EnergyConsumed": 331.2499999999982,
      "PeopleVisited": 161
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Mumbai",
      "EnergyConsumed": 197.8000000000029,
      "PeopleVisited": 574
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 425.7666666666628,
      "PeopleVisited": 218
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 684.5999999999985,
      "PeopleVisited": 152
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Gondia",
      "EnergyConsumed": 226.3000000000029,
      "PeopleVisited": 562
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Amravati",
      "EnergyConsumed": 329.8833333333241,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-10",
      "StoreName": "Akola",
      "EnergyConsumed": 440.2833333333256,
      "PeopleVisited": 151
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Solapur",
      "EnergyConsumed": 37.35000000000582,
      "PeopleVisited": 287
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Satara",
      "EnergyConsumed": 494.6000000000058,
      "PeopleVisited": 317
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Sangli",
      "EnergyConsumed": 436.7999999999956,
      "PeopleVisited": 114
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Pune",
      "EnergyConsumed": 336.5166666666628,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Palghar",
      "EnergyConsumed": 482.3333333333321,
      "PeopleVisited": 456
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Nashik",
      "EnergyConsumed": 420.36666666666633,
      "PeopleVisited": 537
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Thane",
      "EnergyConsumed": 519.6499999999996,
      "PeopleVisited": 135
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Nanded",
      "EnergyConsumed": 252.63333333334597,
      "PeopleVisited": 128
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Mumbai",
      "EnergyConsumed": 212.1999999999971,
      "PeopleVisited": 622
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Akola",
      "EnergyConsumed": 420.0166666666773,
      "PeopleVisited": 153
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Amravati",
      "EnergyConsumed": 355.316666666673,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Nagpur",
      "EnergyConsumed": 334.9333333333343,
      "PeopleVisited": 166
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 788.2333333333299,
      "PeopleVisited": 126
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 426,
      "PeopleVisited": 217
    },
    {
      "Date": "2023-08-11",
      "StoreName": "Gondia",
      "EnergyConsumed": 221.58333333332848,
      "PeopleVisited": 560
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Thane",
      "EnergyConsumed": 530.6833333333361,
      "PeopleVisited": 166
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Solapur",
      "EnergyConsumed": 40.31666666665842,
      "PeopleVisited": 342
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Satara",
      "EnergyConsumed": 536.616666666665,
      "PeopleVisited": 348
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Sangli",
      "EnergyConsumed": 520.4000000000087,
      "PeopleVisited": 137
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Pune",
      "EnergyConsumed": 276.8166666666948,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Nashik",
      "EnergyConsumed": 430.15000000000055,
      "PeopleVisited": 681
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Palghar",
      "EnergyConsumed": 528.9666666666635,
      "PeopleVisited": 492
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Mumbai",
      "EnergyConsumed": 218.5,
      "PeopleVisited": 613
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 477.566666666673,
      "PeopleVisited": 245
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 608.8333896199474,
      "PeopleVisited": 142
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Gondia",
      "EnergyConsumed": 233.8666666666686,
      "PeopleVisited": 628
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Amravati",
      "EnergyConsumed": 357.0166666666628,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Akola",
      "EnergyConsumed": 461.6166666666613,
      "PeopleVisited": 200
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Nagpur",
      "EnergyConsumed": 360.5,
      "PeopleVisited": 164
    },
    {
      "Date": "2023-08-12",
      "StoreName": "Nanded",
      "EnergyConsumed": 276.1999999999971,
      "PeopleVisited": 108
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Nashik",
      "EnergyConsumed": 367.28333333333376,
      "PeopleVisited": 1208
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Thane",
      "EnergyConsumed": 550.0499999999975,
      "PeopleVisited": 258
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Solapur",
      "EnergyConsumed": 41.28333333334013,
      "PeopleVisited": 548
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Satara",
      "EnergyConsumed": 573.383333333335,
      "PeopleVisited": 586
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Sangli",
      "EnergyConsumed": 580.3999999999942,
      "PeopleVisited": 250
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Pune",
      "EnergyConsumed": 344.5333333333256,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Palghar",
      "EnergyConsumed": 512.2999999999993,
      "PeopleVisited": 608
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Nanded",
      "EnergyConsumed": 255.14999999999415,
      "PeopleVisited": 187
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Mumbai",
      "EnergyConsumed": 215.3000000000029,
      "PeopleVisited": 1530
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 369.933333333327,
      "PeopleVisited": 317
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 659.7832770467212,
      "PeopleVisited": 214
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Gondia",
      "EnergyConsumed": 235.9499999999971,
      "PeopleVisited": 1268
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Amravati",
      "EnergyConsumed": 372.1999999999971,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Akola",
      "EnergyConsumed": 453.1666666666642,
      "PeopleVisited": 332
    },
    {
      "Date": "2023-08-13",
      "StoreName": "Nagpur",
      "EnergyConsumed": 345.1333333333332,
      "PeopleVisited": 274
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Thane",
      "EnergyConsumed": 522.0499999999993,
      "PeopleVisited": 312
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Solapur",
      "EnergyConsumed": 42.46666666666715,
      "PeopleVisited": 529
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Satara",
      "EnergyConsumed": 571.8999999999942,
      "PeopleVisited": 581
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Sangli",
      "EnergyConsumed": 559.1999999999971,
      "PeopleVisited": 379
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Pune",
      "EnergyConsumed": 360.4777116329497,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Palghar",
      "EnergyConsumed": 524.7333333333445,
      "PeopleVisited": 738
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Nashik",
      "EnergyConsumed": 444.9499999999989,
      "PeopleVisited": 1293
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Nanded",
      "EnergyConsumed": 251.2333333333372,
      "PeopleVisited": 195
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Mumbai",
      "EnergyConsumed": 205.3000000000029,
      "PeopleVisited": 2393
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 414.6333333333314,
      "PeopleVisited": 485
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 655.6666666666715,
      "PeopleVisited": 159
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Gondia",
      "EnergyConsumed": 240.8000000000029,
      "PeopleVisited": 2204
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Amravati",
      "EnergyConsumed": 333.4166666666715,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Akola",
      "EnergyConsumed": 430.1166666666686,
      "PeopleVisited": 293
    },
    {
      "Date": "2023-08-14",
      "StoreName": "Nagpur",
      "EnergyConsumed": 346.0666666666657,
      "PeopleVisited": 334
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Nashik",
      "EnergyConsumed": 418.6333333333332,
      "PeopleVisited": 727
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Solapur",
      "EnergyConsumed": 43.33333333332848,
      "PeopleVisited": 265
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Satara",
      "EnergyConsumed": 535.8500000000058,
      "PeopleVisited": 473
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Sangli",
      "EnergyConsumed": 469.1000000000058,
      "PeopleVisited": 177
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Pune",
      "EnergyConsumed": 342.67228836704453,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Palghar",
      "EnergyConsumed": 522,
      "PeopleVisited": 540
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Nanded",
      "EnergyConsumed": 247.4833333333372,
      "PeopleVisited": 167
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Thane",
      "EnergyConsumed": 517.2000000000007,
      "PeopleVisited": 173
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Mumbai",
      "EnergyConsumed": 199.89999999999415,
      "PeopleVisited": 869
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 430.7333333333372,
      "PeopleVisited": 268
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 660.75,
      "PeopleVisited": 201
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Gondia",
      "EnergyConsumed": 223.09999999999852,
      "PeopleVisited": 909
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Amravati",
      "EnergyConsumed": 344.6833333333343,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Akola",
      "EnergyConsumed": 427.8500000000058,
      "PeopleVisited": 193
    },
    {
      "Date": "2023-08-15",
      "StoreName": "Nagpur",
      "EnergyConsumed": 337.3000000000011,
      "PeopleVisited": 232
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Thane",
      "EnergyConsumed": 502.9833333333336,
      "PeopleVisited": 347
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Solapur",
      "EnergyConsumed": 39.983333333337214,
      "PeopleVisited": 503
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Satara",
      "EnergyConsumed": 526.6666666666642,
      "PeopleVisited": 462
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Sangli",
      "EnergyConsumed": 443.5,
      "PeopleVisited": 316
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Pune",
      "EnergyConsumed": 342.3000000000029,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Palghar",
      "EnergyConsumed": 474.6999999999971,
      "PeopleVisited": 603
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Nashik",
      "EnergyConsumed": 407.8166666666666,
      "PeopleVisited": 1165
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Nanded",
      "EnergyConsumed": 241.7333333333372,
      "PeopleVisited": 210
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Nagpur",
      "EnergyConsumed": 327.78333333333285,
      "PeopleVisited": 286
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Mumbai",
      "EnergyConsumed": 224,
      "PeopleVisited": 2706
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 421.5166666666628,
      "PeopleVisited": 352
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 603.916666666657,
      "PeopleVisited": 142
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Gondia",
      "EnergyConsumed": 219.2000000000044,
      "PeopleVisited": 1714
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Amravati",
      "EnergyConsumed": 308.2333333333372,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-16",
      "StoreName": "Akola",
      "EnergyConsumed": 430.84999999999127,
      "PeopleVisited": 282
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Thane",
      "EnergyConsumed": 528.1333333333332,
      "PeopleVisited": 144
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Solapur",
      "EnergyConsumed": 43.25,
      "PeopleVisited": 151
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Satara",
      "EnergyConsumed": 483.38333333333503,
      "PeopleVisited": 282
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Sangli",
      "EnergyConsumed": 375.48333333332994,
      "PeopleVisited": 0
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Pune",
      "EnergyConsumed": 361.4500000000262,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Palghar",
      "EnergyConsumed": 531.9333333333343,
      "PeopleVisited": 115
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Nashik",
      "EnergyConsumed": 410.3833333333341,
      "PeopleVisited": 290
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Nanded",
      "EnergyConsumed": 251.26666666664823,
      "PeopleVisited": 91
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Nagpur",
      "EnergyConsumed": 322.1999999999989,
      "PeopleVisited": 122
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Mumbai",
      "EnergyConsumed": 246.40000000000143,
      "PeopleVisited": 391
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 429.2166666666744,
      "PeopleVisited": 145
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 604.150000000016,
      "PeopleVisited": 101
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Gondia",
      "EnergyConsumed": 218.3166666666657,
      "PeopleVisited": 443
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Amravati",
      "EnergyConsumed": 294.5666666666657,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-17",
      "StoreName": "Akola",
      "EnergyConsumed": 428,
      "PeopleVisited": 103
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Thane",
      "EnergyConsumed": 563.4166666666661,
      "PeopleVisited": 110
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Solapur",
      "EnergyConsumed": 38.13333333333139,
      "PeopleVisited": 215
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Satara",
      "EnergyConsumed": 462.13333333333503,
      "PeopleVisited": 356
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Sangli",
      "EnergyConsumed": 463.1166666666686,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Pune",
      "EnergyConsumed": 342.0499999999884,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Palghar",
      "EnergyConsumed": 526.5833333333285,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Nashik",
      "EnergyConsumed": 401.96666666666624,
      "PeopleVisited": 447
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Nanded",
      "EnergyConsumed": 251.0166666666773,
      "PeopleVisited": 84
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Nagpur",
      "EnergyConsumed": 320.0000000000018,
      "PeopleVisited": 124
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Mumbai",
      "EnergyConsumed": 228,
      "PeopleVisited": 512
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 426.3666666666613,
      "PeopleVisited": 157
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 591.0833333333212,
      "PeopleVisited": 174
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Gondia",
      "EnergyConsumed": 228.08333333332848,
      "PeopleVisited": 432
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Amravati",
      "EnergyConsumed": 287.83333333334303,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-18",
      "StoreName": "Akola",
      "EnergyConsumed": 428.1833333333343,
      "PeopleVisited": 102
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Thane",
      "EnergyConsumed": 384.2666666666664,
      "PeopleVisited": 155
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Solapur",
      "EnergyConsumed": 39.11666666666861,
      "PeopleVisited": 214
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Satara",
      "EnergyConsumed": 478.7833333333292,
      "PeopleVisited": 478
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Sangli",
      "EnergyConsumed": 553,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Pune",
      "EnergyConsumed": 345.7166666666599,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Palghar",
      "EnergyConsumed": 535.0499999999956,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Nashik",
      "EnergyConsumed": 419.3500000000004,
      "PeopleVisited": 415
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Nanded",
      "EnergyConsumed": 241,
      "PeopleVisited": 113
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Nagpur",
      "EnergyConsumed": 322.5166666666646,
      "PeopleVisited": 180
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Mumbai",
      "EnergyConsumed": 225.79999999999563,
      "PeopleVisited": 554
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 435.5,
      "PeopleVisited": 180
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 586.066666666673,
      "PeopleVisited": 209
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Gondia",
      "EnergyConsumed": 247.1999999999971,
      "PeopleVisited": 533
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Amravati",
      "EnergyConsumed": 297.2666666666628,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-19",
      "StoreName": "Akola",
      "EnergyConsumed": 441.6166666666686,
      "PeopleVisited": 128
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Thane",
      "EnergyConsumed": 572.3166666666675,
      "PeopleVisited": 278
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Solapur",
      "EnergyConsumed": 38.38333333333139,
      "PeopleVisited": 426
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Satara",
      "EnergyConsumed": 511.08333333333576,
      "PeopleVisited": 502
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Sangli",
      "EnergyConsumed": 489.9000000000015,
      "PeopleVisited": 203
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Pune",
      "EnergyConsumed": 388.0666666666657,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Palghar",
      "EnergyConsumed": 565.1833333333416,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Nashik",
      "EnergyConsumed": 426.9833333333327,
      "PeopleVisited": 967
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Nanded",
      "EnergyConsumed": 238.4833333333372,
      "PeopleVisited": 154
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Nagpur",
      "EnergyConsumed": 340.90000000000146,
      "PeopleVisited": 269
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Mumbai",
      "EnergyConsumed": 221.6166666666686,
      "PeopleVisited": 1164
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 466.2833333333401,
      "PeopleVisited": 232
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 546.7333333333299,
      "PeopleVisited": 229
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Gondia",
      "EnergyConsumed": 247.60000000000585,
      "PeopleVisited": 978
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Amravati",
      "EnergyConsumed": 292.5833333333285,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-20",
      "StoreName": "Akola",
      "EnergyConsumed": 456.1000000000058,
      "PeopleVisited": 207
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Thane",
      "EnergyConsumed": 565.5333333333365,
      "PeopleVisited": 197
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Solapur",
      "EnergyConsumed": 42.983333333337214,
      "PeopleVisited": 569
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Satara",
      "EnergyConsumed": 495.4499999999971,
      "PeopleVisited": 774
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Sangli",
      "EnergyConsumed": 414.8000000000029,
      "PeopleVisited": 288
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Pune",
      "EnergyConsumed": 383.34999999999127,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Palghar",
      "EnergyConsumed": 559.2833333333256,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Nashik",
      "EnergyConsumed": 406.7333333333336,
      "PeopleVisited": 989
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Nanded",
      "EnergyConsumed": 240.2999999999884,
      "PeopleVisited": 213
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Nagpur",
      "EnergyConsumed": 344.9499999999971,
      "PeopleVisited": 326
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Mumbai",
      "EnergyConsumed": 197.4833333333445,
      "PeopleVisited": 2079
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 439.3000000000029,
      "PeopleVisited": 468
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 614.4000000000015,
      "PeopleVisited": 134
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Gondia",
      "EnergyConsumed": 274,
      "PeopleVisited": 1667
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Amravati",
      "EnergyConsumed": 297.5166666666628,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-21",
      "StoreName": "Akola",
      "EnergyConsumed": 417.3999999999942,
      "PeopleVisited": 286
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Thane",
      "EnergyConsumed": 594.2333333333299,
      "PeopleVisited": 121
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Solapur",
      "EnergyConsumed": 40.61666666666133,
      "PeopleVisited": 197
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Satara",
      "EnergyConsumed": 482.7166666666708,
      "PeopleVisited": 374
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Sangli",
      "EnergyConsumed": 572.0999999999913,
      "PeopleVisited": 151
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Pune",
      "EnergyConsumed": 353.1666666666715,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Palghar",
      "EnergyConsumed": 534.2333333333372,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Nashik",
      "EnergyConsumed": 384.9666666666672,
      "PeopleVisited": 324
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Nanded",
      "EnergyConsumed": 232.75,
      "PeopleVisited": 117
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Nagpur",
      "EnergyConsumed": 344.4166666666679,
      "PeopleVisited": 149
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Mumbai",
      "EnergyConsumed": 219.2999999999884,
      "PeopleVisited": 394
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 420.23333333332266,
      "PeopleVisited": 272
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 498.9833333333372,
      "PeopleVisited": 139
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Gondia",
      "EnergyConsumed": 235.6999999999971,
      "PeopleVisited": 609
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Amravati",
      "EnergyConsumed": 286.8000000000029,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-22",
      "StoreName": "Akola",
      "EnergyConsumed": 419.6999999999971,
      "PeopleVisited": 119
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Solapur",
      "EnergyConsumed": 41.41666666666424,
      "PeopleVisited": 181
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Satara",
      "EnergyConsumed": 496.5999999999949,
      "PeopleVisited": 329
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Thane",
      "EnergyConsumed": 571.7166666666672,
      "PeopleVisited": 137
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Pune",
      "EnergyConsumed": 343.0833333333285,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Palghar",
      "EnergyConsumed": 565.9000000000015,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Nashik",
      "EnergyConsumed": 363.7166666666653,
      "PeopleVisited": 444
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Nanded",
      "EnergyConsumed": 234.83333333332848,
      "PeopleVisited": 103
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Sangli",
      "EnergyConsumed": 377.40000000000873,
      "PeopleVisited": 124
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Mumbai",
      "EnergyConsumed": 202.5333333333256,
      "PeopleVisited": 302
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 417.1999999999971,
      "PeopleVisited": 206
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 754.0333333333328,
      "PeopleVisited": 104
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Gondia",
      "EnergyConsumed": 237.60000000000585,
      "PeopleVisited": 576
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Amravati",
      "EnergyConsumed": 283.5,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Akola",
      "EnergyConsumed": 432.8166666666657,
      "PeopleVisited": 115
    },
    {
      "Date": "2023-08-23",
      "StoreName": "Nagpur",
      "EnergyConsumed": 337.31666666666933,
      "PeopleVisited": 130
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Thane",
      "EnergyConsumed": 540.1333333333314,
      "PeopleVisited": 110
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Solapur",
      "EnergyConsumed": 42.94999999999709,
      "PeopleVisited": 206
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Satara",
      "EnergyConsumed": 493.3666666666686,
      "PeopleVisited": 332
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Sangli",
      "EnergyConsumed": 434.2999999999956,
      "PeopleVisited": 188
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Pune",
      "EnergyConsumed": 343.8666666666832,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Palghar",
      "EnergyConsumed": 542.3333333333358,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Nashik",
      "EnergyConsumed": 380.1000000000022,
      "PeopleVisited": 484
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Nanded",
      "EnergyConsumed": 232.46666666667443,
      "PeopleVisited": 109
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Nagpur",
      "EnergyConsumed": 338.11666666666497,
      "PeopleVisited": 174
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Mumbai",
      "EnergyConsumed": 197.06666666668025,
      "PeopleVisited": 307
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 417.4333333333343,
      "PeopleVisited": 169
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 9890.648333333324,
      "PeopleVisited": 109
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Gondia",
      "EnergyConsumed": 241.79999999999563,
      "PeopleVisited": 642
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Amravati",
      "EnergyConsumed": 307.3000000000029,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-24",
      "StoreName": "Akola",
      "EnergyConsumed": 422.3833333333386,
      "PeopleVisited": 129
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Thane",
      "EnergyConsumed": 540.383333333335,
      "PeopleVisited": 123
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Solapur",
      "EnergyConsumed": 43.71666666667443,
      "PeopleVisited": 225
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Satara",
      "EnergyConsumed": 490.6666666666679,
      "PeopleVisited": 355
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Sangli",
      "EnergyConsumed": 376,
      "PeopleVisited": 154
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Pune",
      "EnergyConsumed": 363.7166666666744,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Palghar",
      "EnergyConsumed": 577.3666666666686,
      "PeopleVisited": 340
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Nashik",
      "EnergyConsumed": 416.8999999999978,
      "PeopleVisited": 449
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Nanded",
      "EnergyConsumed": 240.3166666666657,
      "PeopleVisited": 110
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Nagpur",
      "EnergyConsumed": 335,
      "PeopleVisited": 116
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Mumbai",
      "EnergyConsumed": 229.6999999999971,
      "PeopleVisited": 372
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 422.83333333333576,
      "PeopleVisited": 232
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 728.0833333333358,
      "PeopleVisited": 188
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Gondia",
      "EnergyConsumed": 249.2333333333372,
      "PeopleVisited": 499
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Amravati",
      "EnergyConsumed": 311.3833333333241,
      "PeopleVisited": 274.3
    },
    {
      "Date": "2023-08-25",
      "StoreName": "Akola",
      "EnergyConsumed": 440.1500000000015,
      "PeopleVisited": 160
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Thane",
      "EnergyConsumed": 586.2833333333365,
      "PeopleVisited": 132
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Solapur",
      "EnergyConsumed": 46.30000000000291,
      "PeopleVisited": 239
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Satara",
      "EnergyConsumed": 530.0833333333358,
      "PeopleVisited": 390
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Sangli",
      "EnergyConsumed": 428.066666666673,
      "PeopleVisited": 100
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Pune",
      "EnergyConsumed": 369.94999999998254,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Palghar",
      "EnergyConsumed": 596.8833333333314,
      "PeopleVisited": 403
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Nashik",
      "EnergyConsumed": 430.58333333333394,
      "PeopleVisited": 544
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Nanded",
      "EnergyConsumed": 247.60000000000585,
      "PeopleVisited": 130
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Nagpur",
      "EnergyConsumed": 363,
      "PeopleVisited": 144
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Mumbai",
      "EnergyConsumed": 220.90000000000876,
      "PeopleVisited": 418
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 461.58333333333576,
      "PeopleVisited": 254
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 736.183333333327,
      "PeopleVisited": 167
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Gondia",
      "EnergyConsumed": 286.0666666666584,
      "PeopleVisited": 639
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Amravati",
      "EnergyConsumed": 306.4166666666788,
      "PeopleVisited": 303.3
    },
    {
      "Date": "2023-08-26",
      "StoreName": "Akola",
      "EnergyConsumed": 479.2666666666628,
      "PeopleVisited": 164
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Solapur",
      "EnergyConsumed": 44.89999999999418,
      "PeopleVisited": 508
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Satara",
      "EnergyConsumed": 583.9166666666642,
      "PeopleVisited": 322
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Thane",
      "EnergyConsumed": 604.6999999999971,
      "PeopleVisited": 276
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Pune",
      "EnergyConsumed": 390.6499999999942,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Palghar",
      "EnergyConsumed": 587.1000000000058,
      "PeopleVisited": 597
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Nashik",
      "EnergyConsumed": 429.09999999999854,
      "PeopleVisited": 1051
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Nanded",
      "EnergyConsumed": 250.0499999999884,
      "PeopleVisited": 154
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Sangli",
      "EnergyConsumed": 453.683333333327,
      "PeopleVisited": 205
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Mumbai",
      "EnergyConsumed": 242.39999999999415,
      "PeopleVisited": 809
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 481.75,
      "PeopleVisited": 327
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 742.6666666666788,
      "PeopleVisited": 185
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Gondia",
      "EnergyConsumed": 252,
      "PeopleVisited": 1028
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Amravati",
      "EnergyConsumed": 289.3999999999942,
      "PeopleVisited": 519.3529411764706
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Akola",
      "EnergyConsumed": 463.34999999999854,
      "PeopleVisited": 272
    },
    {
      "Date": "2023-08-27",
      "StoreName": "Nagpur",
      "EnergyConsumed": 349.0499999999993,
      "PeopleVisited": 248
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Thane",
      "EnergyConsumed": 551.9166666666642,
      "PeopleVisited": 308
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Solapur",
      "EnergyConsumed": 44.10000000000582,
      "PeopleVisited": 502
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Satara",
      "EnergyConsumed": 541.4000000000015,
      "PeopleVisited": 459
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Sangli",
      "EnergyConsumed": 497.4500000000044,
      "PeopleVisited": 293
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Pune",
      "EnergyConsumed": 374.5,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Palghar",
      "EnergyConsumed": 576.2999999999956,
      "PeopleVisited": 663
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Nashik",
      "EnergyConsumed": 423.03333333333467,
      "PeopleVisited": 1103
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Nanded",
      "EnergyConsumed": 236.75000000001452,
      "PeopleVisited": 230
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Nagpur",
      "EnergyConsumed": 359.59999999999854,
      "PeopleVisited": 264
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Mumbai",
      "EnergyConsumed": 202,
      "PeopleVisited": 1269
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 428.3666666666759,
      "PeopleVisited": 555
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 789.9666666666599,
      "PeopleVisited": 129
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Gondia",
      "EnergyConsumed": 261.2000000000044,
      "PeopleVisited": 1389
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Amravati",
      "EnergyConsumed": 281,
      "PeopleVisited": 696.8627450980392
    },
    {
      "Date": "2023-08-28",
      "StoreName": "Akola",
      "EnergyConsumed": 431.6666666666715,
      "PeopleVisited": 308
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Solapur",
      "EnergyConsumed": 41.69999999999709,
      "PeopleVisited": 203
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Satara",
      "EnergyConsumed": 502.09999999999854,
      "PeopleVisited": 197
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Thane",
      "EnergyConsumed": 540.4833333333336,
      "PeopleVisited": 126
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Pune",
      "EnergyConsumed": 407.68333333334886,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Palghar",
      "EnergyConsumed": 548.7333333333299,
      "PeopleVisited": 338
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Nashik",
      "EnergyConsumed": 414.3000000000011,
      "PeopleVisited": 479
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Nanded",
      "EnergyConsumed": 239.16666666667152,
      "PeopleVisited": 114
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Sangli",
      "EnergyConsumed": 478.1999999999971,
      "PeopleVisited": 159
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Mumbai",
      "EnergyConsumed": 212.2999999999884,
      "PeopleVisited": 312
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 422.23333333332266,
      "PeopleVisited": 241
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 603.833333333343,
      "PeopleVisited": 163
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Gondia",
      "EnergyConsumed": 281.566666666673,
      "PeopleVisited": 513
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Amravati",
      "EnergyConsumed": 282.25,
      "PeopleVisited": 285.890625
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Akola",
      "EnergyConsumed": 446.5666666666657,
      "PeopleVisited": 153
    },
    {
      "Date": "2023-08-29",
      "StoreName": "Nagpur",
      "EnergyConsumed": 342.3500000000022,
      "PeopleVisited": 165
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Thane",
      "EnergyConsumed": 545.5,
      "PeopleVisited": 185
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Solapur",
      "EnergyConsumed": 44.46666666665988,
      "PeopleVisited": 258
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Satara",
      "EnergyConsumed": 559.5500000000029,
      "PeopleVisited": 331
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Pune",
      "EnergyConsumed": 401.08333333331393,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Palghar",
      "EnergyConsumed": 571.4499999999971,
      "PeopleVisited": 393
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Nashik",
      "EnergyConsumed": 412.4499999999989,
      "PeopleVisited": 515
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Nanded",
      "EnergyConsumed": 249.4499999999971,
      "PeopleVisited": 128
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Sangli",
      "EnergyConsumed": 473,
      "PeopleVisited": 149
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Mumbai",
      "EnergyConsumed": 223.10000000000585,
      "PeopleVisited": 388
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 407.8833333333314,
      "PeopleVisited": 302
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 664.7333333333227,
      "PeopleVisited": 106
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Gondia",
      "EnergyConsumed": 235.93333333332703,
      "PeopleVisited": 793
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Amravati",
      "EnergyConsumed": 298.3500000000058,
      "PeopleVisited": 362.109375
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Akola",
      "EnergyConsumed": 429.59999999999854,
      "PeopleVisited": 120
    },
    {
      "Date": "2023-08-30",
      "StoreName": "Nagpur",
      "EnergyConsumed": 342.6000000000022,
      "PeopleVisited": 184
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Satara",
      "EnergyConsumed": 587.1333333333314,
      "PeopleVisited": 290
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Sangli",
      "EnergyConsumed": 460.2666666666628,
      "PeopleVisited": 158
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Pune",
      "EnergyConsumed": 377.31666666668025,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Palghar",
      "EnergyConsumed": 558.1000000000058,
      "PeopleVisited": 384
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Nashik",
      "EnergyConsumed": 417.4333333333325,
      "PeopleVisited": 583
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Nanded",
      "EnergyConsumed": 237.36666666665408,
      "PeopleVisited": 109
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Jalgaon",
      "EnergyConsumed": 732.9333333333343,
      "PeopleVisited": 230
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Mumbai",
      "EnergyConsumed": 224.10000000000585,
      "PeopleVisited": 435
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Kolhapur",
      "EnergyConsumed": 435.25,
      "PeopleVisited": 296
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Gondia",
      "EnergyConsumed": 244.79999999999563,
      "PeopleVisited": 629
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Amravati",
      "EnergyConsumed": 287.6999999999971,
      "PeopleVisited": 260.375
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Akola",
      "EnergyConsumed": 433.1000000000058,
      "PeopleVisited": 186
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Solapur",
      "EnergyConsumed": 40.83333333334304,
      "PeopleVisited": 288
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Nagpur",
      "EnergyConsumed": 342.29999999999563,
      "PeopleVisited": 156
    },
    {
      "Date": "2023-08-31",
      "StoreName": "Thane",
      "EnergyConsumed": 422.5666666666693,
      "PeopleVisited": 124
    }
  ].filter(item => item.StoreName === "Nashik");
    const data =[
      
      {
        "Date": "2023-09-01",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 422,
        "Forecasted PeopleVisited": 492
      },
      {
        "Date": "2023-09-02",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 435,
        "Forecasted PeopleVisited": 575
      },
      {
        "Date": "2023-09-03",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 422,
        "Forecasted PeopleVisited": 1115
      },
      {
        "Date": "2023-09-04",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 429,
        "Forecasted PeopleVisited": 1079
      },
      {
        "Date": "2023-09-05",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 403,
        "Forecasted PeopleVisited": 405
      },
      {
        "Date": "2023-09-06",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 415,
        "Forecasted PeopleVisited": 489
      },
      {
        "Date": "2023-09-07",
        "StoreName": "Nashik",
        "Forecasted EnergyConsumed": 414,
        "Forecasted PeopleVisited": 467
      },
    ];
      //   {
      //     name: 'Page G',
      //     uv: 3490,
      //     pv: 4300,
      //     amt: 2100,
      //   },
      // ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Energy Consumption</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>12509</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Visitors</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>21369</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Forecasted Energy Consumption</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>2940</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Forecasted Visitors</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>3559</h1>
            </div>
        </div>

        <div className='charts'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart
            width={1200}
            height={300}
            data={trainData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="EnergyConsumed" fill="#8884d8" />
                <Bar dataKey="PeopleVisited" fill="#82ca9d" />
                </BarChart>
            {/* </ResponsiveContainer> */}

           

        </div>
        <div className='charts'>
           {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                width={1200}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Forecasted EnergyConsumed" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Forecasted PeopleVisited" stroke="#82ca9d" />
                </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    </main>
  )
}

export default Home
