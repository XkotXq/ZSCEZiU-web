"use client"
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
export default function TagSellect(setActiveTags, activeTags) {
    return (
            <Autocomplete label="Wybierz klasę" value={activeTags} onValueChange={setActiveTags} isRequired>
                <AutocompleteItem key="brak" value="brak">
                    brak
                </AutocompleteItem> <AutocompleteItem key="klasa I" value="klasa I">
                    klasa I
                </AutocompleteItem>
                <AutocompleteItem key="klasa II" value="klasa II">
                    klasa II
                </AutocompleteItem>
                <AutocompleteItem key="klasa III" value="klasa III">
                    klasa III
                </AutocompleteItem>
                <AutocompleteItem key="klasa IV" value="klasa IV">
                    klasa IV
                </AutocompleteItem>
                <AutocompleteItem key="klasa V" value="klasa V">
                    klasa V
                </AutocompleteItem>
            </Autocomplete>
    )
}