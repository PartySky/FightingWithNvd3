import * as angular from "angular";

import TrackListTemplate from "./tracklist.html";
import { TrackListComponent } from "./tracklist.component";

export const name = "wave.chart.fullstack.components";
angular
    .module(name, ['nvd3'])
    .component("etTrackList", {
        template: TrackListTemplate,
        controller: TrackListComponent
    });