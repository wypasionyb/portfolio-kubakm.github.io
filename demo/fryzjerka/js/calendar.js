const _0x589295 = _0x2403;
(function (_0x57ff38, _0x2db069) {
  const _0x1fc9b8 = _0x2403,
    _0x3a3f20 = _0x57ff38();
  while (!![]) {
    try {
      const _0x5c97a2 =
        parseInt(_0x1fc9b8(0x15c)) / 0x1 +
        -parseInt(_0x1fc9b8(0x173)) / 0x2 +
        parseInt(_0x1fc9b8(0x17c)) / 0x3 +
        (-parseInt(_0x1fc9b8(0x175)) / 0x4) *
          (parseInt(_0x1fc9b8(0x154)) / 0x5) +
        parseInt(_0x1fc9b8(0x15e)) / 0x6 +
        parseInt(_0x1fc9b8(0x17a)) / 0x7 +
        (-parseInt(_0x1fc9b8(0x171)) / 0x8) *
          (parseInt(_0x1fc9b8(0x158)) / 0x9);
      if (_0x5c97a2 === _0x2db069) break;
      else _0x3a3f20["push"](_0x3a3f20["shift"]());
    } catch (_0x3b906f) {
      _0x3a3f20["push"](_0x3a3f20["shift"]());
    }
  }
})(_0x5d9a, 0x19d5f);
function _0x5d9a() {
  const _0x361783 = [
    "#calendarBody\x20td.selected",
    "default",
    "createElement",
    "remove",
    "pointer",
    "onclick",
    "classList",
    "getDate",
    "getElementById",
    "textContent",
    "appendChild",
    "prevMonth",
    "6264omLsQy",
    "nextMonth",
    "110348Whocpt",
    "color",
    "16224uidyoU",
    "getDay",
    "querySelectorAll",
    "log",
    "add",
    "867678dmvQki",
    "Wybrano\x20datę:\x20",
    "499023xalghB",
    "getMonth",
    "90NDEXXn",
    "selected",
    "today",
    "toLocaleString",
    "3483CBUqmr",
    "style",
    "#999",
    "cursor",
    "109256RUXroY",
    "innerHTML",
    "824850gqwECH",
    "month",
    "pl-PL",
    "calendarBody",
    "year",
    "day",
    "getFullYear",
  ];
  _0x5d9a = function () {
    return _0x361783;
  };
  return _0x5d9a();
}
const calendarBody = document[_0x589295(0x16d)](_0x589295(0x161)),
  monthYear = document["getElementById"]("monthYear"),
  prevMonth = document[_0x589295(0x16d)](_0x589295(0x170)),
  nextMonth = document[_0x589295(0x16d)](_0x589295(0x172)),
  today = new Date();
function _0x2403(_0x2a84b4, _0x75fd7e) {
  const _0x5d9aad = _0x5d9a();
  return (
    (_0x2403 = function (_0x2403da, _0x40108b) {
      _0x2403da = _0x2403da - 0x153;
      let _0x567588 = _0x5d9aad[_0x2403da];
      return _0x567588;
    }),
    _0x2403(_0x2a84b4, _0x75fd7e)
  );
}
let currentMonth = today[_0x589295(0x153)](),
  currentYear = today["getFullYear"](),
  selectedDate = null;
function renderCalendar(_0x5435b0, _0x5f389a) {
  const _0x24f7cd = _0x589295,
    _0xd596c = new Date(_0x5f389a, _0x5435b0, 0x1)[_0x24f7cd(0x176)](),
    _0x424884 = _0xd596c === 0x0 ? 0x6 : _0xd596c - 0x1,
    _0x39d618 = new Date(_0x5f389a, _0x5435b0 + 0x1, 0x0)[_0x24f7cd(0x16c)]();
  (calendarBody[_0x24f7cd(0x15d)] = ""),
    (monthYear[_0x24f7cd(0x16e)] =
      new Date(_0x5f389a, _0x5435b0)[_0x24f7cd(0x157)](_0x24f7cd(0x160), {
        month: "long",
      }) +
      "\x20" +
      _0x5f389a);
  let _0x2648b2 = 0x1;
  const _0x581a83 = new Date(
    today[_0x24f7cd(0x164)](),
    today[_0x24f7cd(0x153)](),
    today[_0x24f7cd(0x16c)]()
  );
  for (let _0x54d021 = 0x0; _0x54d021 < 0x6; _0x54d021++) {
    const _0x508d90 = document[_0x24f7cd(0x167)]("tr");
    for (let _0x45b2b3 = 0x0; _0x45b2b3 < 0x7; _0x45b2b3++) {
      const _0x5562e6 = document["createElement"]("td");
      if (_0x54d021 === 0x0 && _0x45b2b3 < _0x424884)
        (_0x5562e6[_0x24f7cd(0x16e)] = ""),
          (_0x5562e6[_0x24f7cd(0x159)][_0x24f7cd(0x15b)] = _0x24f7cd(0x166));
      else {
        if (_0x2648b2 > _0x39d618)
          (_0x5562e6[_0x24f7cd(0x16e)] = ""),
            (_0x5562e6[_0x24f7cd(0x159)]["cursor"] = _0x24f7cd(0x166));
        else {
          _0x5562e6["textContent"] = _0x2648b2;
          const _0x47f77c = new Date(_0x5f389a, _0x5435b0, _0x2648b2);
          _0x47f77c < _0x581a83
            ? ((_0x5562e6[_0x24f7cd(0x159)][_0x24f7cd(0x174)] =
                _0x24f7cd(0x15a)),
              (_0x5562e6[_0x24f7cd(0x159)][_0x24f7cd(0x15b)] =
                _0x24f7cd(0x166)))
            : ((_0x5562e6[_0x24f7cd(0x159)]["cursor"] = _0x24f7cd(0x169)),
              (_0x5562e6["onclick"] = () => {
                const _0xb2ace8 = _0x24f7cd;
                selectedDate &&
                selectedDate[_0xb2ace8(0x163)] === _0x2648b2 &&
                selectedDate[_0xb2ace8(0x15f)] === _0x5435b0 &&
                selectedDate[_0xb2ace8(0x162)] === _0x5f389a
                  ? ((selectedDate = null),
                    _0x5562e6[_0xb2ace8(0x16b)]["remove"](_0xb2ace8(0x155)))
                  : (document[_0xb2ace8(0x177)](_0xb2ace8(0x165))["forEach"](
                      (_0x2706cd) => {
                        const _0x2baada = _0xb2ace8;
                        _0x2706cd[_0x2baada(0x16b)][_0x2baada(0x168)](
                          _0x2baada(0x155)
                        );
                      }
                    ),
                    _0x5562e6[_0xb2ace8(0x16b)][_0xb2ace8(0x179)](
                      _0xb2ace8(0x155)
                    ),
                    (selectedDate = {
                      day: _0x2648b2,
                      month: _0x5435b0,
                      year: _0x5f389a,
                    })),
                  console[_0xb2ace8(0x178)](
                    _0xb2ace8(0x17b) +
                      _0x2648b2 +
                      "." +
                      (_0x5435b0 + 0x1) +
                      "." +
                      _0x5f389a
                  );
              })),
            _0x2648b2 === today[_0x24f7cd(0x16c)]() &&
              _0x5435b0 === today["getMonth"]() &&
              _0x5f389a === today[_0x24f7cd(0x164)]() &&
              _0x5562e6[_0x24f7cd(0x16b)][_0x24f7cd(0x179)](_0x24f7cd(0x156)),
            selectedDate &&
              selectedDate[_0x24f7cd(0x163)] === _0x2648b2 &&
              selectedDate[_0x24f7cd(0x15f)] === _0x5435b0 &&
              selectedDate[_0x24f7cd(0x162)] === _0x5f389a &&
              _0x5562e6["classList"][_0x24f7cd(0x179)](_0x24f7cd(0x155)),
            _0x2648b2++;
        }
      }
      _0x508d90[_0x24f7cd(0x16f)](_0x5562e6);
    }
    calendarBody[_0x24f7cd(0x16f)](_0x508d90);
    if (_0x2648b2 > _0x39d618) break;
  }
}
(prevMonth["onclick"] = () => {
  currentMonth--,
    currentMonth < 0x0 && ((currentMonth = 0xb), currentYear--),
    renderCalendar(currentMonth, currentYear);
}),
  (nextMonth[_0x589295(0x16a)] = () => {
    currentMonth++,
      currentMonth > 0xb && ((currentMonth = 0x0), currentYear++),
      renderCalendar(currentMonth, currentYear);
  }),
  renderCalendar(currentMonth, currentYear);
