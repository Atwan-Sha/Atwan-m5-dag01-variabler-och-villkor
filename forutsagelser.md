# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck | Min gissning | Det som hände | Vad sa TypeScript? | Hade jag rätt? |
|---|---|---|---|---|
| `"5" + 3` |"53"|"53"| |ja|
| `"5" - 3` |""|2|Error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.|nej|
| `true + 1` |2|2|Error: Operator '+' cannot be applied to types 'boolean' and 'number'.|ja|
| `0.1 + 0.2` |0.300001|0.30000000000000004| |nästan|
| `"" === 0` |false|false|Error: This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.|ja|
| `null == undefined` |false|true| |nej|

## Min regel för det jag missade

- string + number = string
- string - number = number
- matte med flyttal/decimaler = ej 100% exakt
- falsy == falsy = true, null === undefined = false, dubbelkolla jämförelse-operatorn

## Tänk efter

"5"-3, true+1 och ""===0

Typescript fungerar bara som kompilering och inte i runtime,
den varnar heller inte vid missen med === då man lätt kan råka
skriva == som är standard i t.ex. C och Java. Det är även konstigt
att "5"+3 inte ger ts-error men "5"-3 gör det.

AI-förklaring:

TypeScript behandlar `+` speciellt eftersom JavaScript använder operatorn både för addition och strängsammanfogning:

- `"5" + 3` → eftersom ena operanden är en sträng konverteras den andra till sträng: `"5" + "3"` → `"53"`.
- `"5" - 3` → TypeScript tillåter inte strängar som operand till `-`; den operatorn är bara avsedd för tal. Därför får du ett typfel.

JavaScript konverterar ändå `"5"` till talet `5` vid körning och räknar ut `2`. TypeScript varnar för det innan körning eftersom det vill fånga sådana implicit konverteringar. Skriv exempelvis `Number("5") - 3` om du menar subtraktion.

