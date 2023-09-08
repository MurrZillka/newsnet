type Mods = Record<string, string | boolean>;

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []) {

    const classMods = Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className)

    return [
        cls,
        ...classMods,
        ...additional.filter(Boolean)

    ].join(' ')
}
