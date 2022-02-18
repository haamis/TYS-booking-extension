// Insert sauna links
let el = document.getElementsByClassName('service-nav')[0]

sauna_dict = {
    "53": "Sauna 2B",
    "54": "Sauna 3D",
    "55": "Sauna 4D",
    "56": "Sauna 5D",
    "57": "Sauna 6D",
    "58": "Sauna 8B",
    "59": "Sauna 10A",
    "14": "Sauna 20B1",
    "60": "Sauna 20B2",
    "61": "Sauna 20B3",
    "62": "Sauna 20B4",
    "63": "Sauna 25B2",
    "64": "Sauna 25B3",
    "65": "Sauna 25B4",
    "66": "Sauna 30B1",
    "67": "Sauna 30B2",
    "68": "Sauna 30B3",
    "69": "Sauna 30B4",
    "71": "Sauna 74B1",
    "72": "Sauna 74B2",
    "73": "Sauna 74B3",
    "16": "Sauna Ikituuri",
}

string_array = []

for (const key in sauna_dict) {
    string_array.push('<a href="https://booking.tys.fi/varaus/service/timetable/' + key + '">' + sauna_dict[key] + '</a>')
}

string_array.push('<a href="https://booking.tys.fi/varaus/service/freetimes/1">Vapaat ajat</a>')

el.innerHTML = string_array.join('&nbsp;|&nbsp;')

// Fix layout

el = document.getElementsByClassName('js-timetable-slide')[0]
el.style.top = '320px'