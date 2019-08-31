import Mock from "mockjs"

Mock.mock("https://api.myjson.com/bins/icw8n",{
    "list|10-20":[
        {
            "name":"@last @first",
            "time":"@time(hh:mm:ss)",
            "cname":"@cname",
            "img":"@img(100x100)"
        }
    ]
})