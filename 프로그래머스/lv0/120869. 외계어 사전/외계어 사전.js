function solution(spell, dic) {
    let spellA = spell.sort().join('');
    let dicA=dic.map(e=>e.split('').sort().join(''))
    return dicA.filter(e=>e==spellA).length>0?1:2;
}