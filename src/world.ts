const enum Locations {
    Titan,
    Ceres,
    /**
     * Sheol in the Hebrew Bible, is a place of darkness to which the dead go. Under some circumstances they are thought to be able to be contacted by the living.
     */
    Sheol,
    /**
     * Used when location is unknown
     */
    Unknown
}

class World {
    public location: Locations;
    constructor(spawnLocation: Locations = Locations.Unknown) {
        this.location = spawnLocation;
    }
}