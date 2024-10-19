try {
    var socket = io("http://192.168.1.55:3000");
} catch (e) {
    alert("Could not connect to the server");
}

socket.on("connect", () => {
    console.log("Connected!");
});

socket.on("monitor", (message) => {
    const res = JSON.parse(message);
    console.log(res.networkInfo);

    const inputBytes = Math.round(res.networkInfo[0].inputBytes/1024);
    const outputBytes = Math.round(res.networkInfo[0].outputBytes/1024)

    update("cpuUsage", res.cpuInfo + "%");
    update("memUsage", res.memoryInfo.usedMemPercentage + "%");
    update("netStat", res.networkInfo[0].interface + " : ⬇️" + inputBytes+"Mb | ⬆️" + outputBytes + "Mb")
})

const update = (id, data) => {
    const parent = document.getElementById(id);
    parent.innerHTML = data;
}