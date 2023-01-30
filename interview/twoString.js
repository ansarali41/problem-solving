let alpha = [
    ('a' = 0),
    ('b' = 0),
    ('c' = 0),
    ('d' = 0),
    ('e' = 0),
    ('f' = 0),
    ('g' = 0),
    ('h' = 0),
    ('i' = 0),
    ('j' = 0),
    ('k' = 0),
    ('l' = 0),
    ('m' = 0),
    ('o' = 0),
    ('p' = 0),
    ('q' = 0),
    ('r' = 0),
    ('s' = 0),
    ('t' = 0),
    ('u' = 0),
    ('v' = 0),
    ('w' = 0),
    ('x' = 0),
    ('y' = 0),
    ('z' = 0),
];

const findExtra = (s1, s2) => {
    
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if(s[i]===alpha[j]){
                alpha[j]++;
                console.log(alpha[j]);
            }
        }
    }
};
const s1 = 'enosis';
const s2 = 'sisenos';
findExtra(s1, s2);
