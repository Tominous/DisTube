import type { Filters } from ".";

/**
 * Default DisTube audio filters.
 * @typedef {Object} defaultFilters
 * @prop {string} 3d 3d
 * @prop {string} bassboost bassboost
 * @prop {string} echo echo
 * @prop {string} karaoke karaoke
 * @prop {string} nightcore nightcore
 * @prop {string} vaporwave vaporwave
 * @prop {string} flanger flanger
 * @prop {string} gate gate
 * @prop {string} haas haas
 * @prop {string} reverse reverse
 * @prop {string} surround surround
 * @prop {string} mcompand mcompand
 * @prop {string} phaser phaser
 * @prop {string} tremolo tremolo
 * @prop {string} earwax earwax
 */
export const defaultFilters: Filters = {
  "3d": "apulsator=hz=0.125",
  bassboost: "bass=g=10",
  echo: "aecho=0.8:0.9:1000:0.3",
  flanger: "flanger",
  gate: "agate",
  haas: "haas",
  karaoke: "stereotools=mlev=0.1",
  nightcore: "asetrate=48000*1.25,aresample=48000,bass=g=5",
  reverse: "areverse",
  vaporwave: "asetrate=48000*0.8,aresample=48000,atempo=1.1",
  mcompand: "mcompand",
  phaser: "aphaser",
  tremolo: "tremolo",
  surround: "surround",
  earwax: "earwax",
};

/**
 * DisTube options.
 * @typedef {Object} DisTubeOptions
 * @prop {Array<CustomPlugin|ExtractorPlugin>} [plugins] DisTube plugins.
 * @prop {boolean} [emitNewSongOnly=false] Whether or not emitting {@link DisTube#event:playSong} event
 * when looping a song or next song is the same as the previous one
 * @prop {boolean} [leaveOnEmpty=true] Whether or not leaving voice channel
 * if the voice channel is empty after {@link DisTubeOptions}.emptyCooldown seconds.
 * @prop {boolean} [leaveOnFinish=false] Whether or not leaving voice channel when the queue ends.
 * @prop {boolean} [leaveOnStop=true] Whether or not leaving voice channel after using {@link DisTube#stop} function.
 * @prop {boolean} [savePreviousSongs=true] Whether or not saving the previous songs of the queue
 * and enable {@link DisTube#previous} method
 * @prop {number} [searchSongs=0] Limit of search results emits in {@link DisTube#event:searchResult} event
 * when {@link DisTube#play} method executed. If `searchSongs <= 1`, play the first result
 * @prop {string} [youtubeCookie] YouTube cookies. Read how to get it in
 * {@link https://github.com/fent/node-ytdl-core/blob/997efdd5dd9063363f6ef668bb364e83970756e7/example/cookies.js#L6-L12|YTDL's Example}
 * @prop {string} [youtubeIdentityToken] If not given; ytdl-core will try to find it.
 * You can find this by going to a video's watch page; viewing the source; and searching for "ID_TOKEN".
 * @prop {boolean} [youtubeDL=true] Whether or not using youtube-dl.
 * @prop {boolean} [updateYouTubeDL=true] Whether or not updating youtube-dl automatically.
 * @prop {Filters} [customFilters] Override {@link defaultFilters} or add more ffmpeg filters.
 * Example=`{ "Filter name"="Filter value"; "8d"="apulsator=hz=0.075" }`
 * @prop {ytdl.getInfoOptions} [ytdlOptions] `ytdl-core` get info options
 * @prop {number} [searchCooldown=60] Built-in search cooldown in seconds (When searchSongs is bigger than 0)
 * @prop {number} [emptyCooldown=60] Built-in leave on empty cooldown in seconds (When leaveOnEmpty is true)
 * @prop {boolean} [nsfw=false] Whether or not playing age-restricted content
 * and disabling safe search in non-NSFW channel.
 * @prop {boolean} [emitAddListWhenCreatingQueue=true] Whether or not emitting `addList` event when creating a new Queue
 * @prop {boolean} [emitAddSongWhenCreatingQueue=true] Whether or not emitting `addSong` event when creating a new Queue
 */
export const defaultOptions = {
  plugins: [],
  emitNewSongOnly: false,
  leaveOnEmpty: true,
  leaveOnFinish: false,
  leaveOnStop: true,
  savePreviousSongs: true,
  youtubeDL: true,
  updateYouTubeDL: true,
  searchSongs: 0,
  customFilters: {},
  ytdlOptions: {},
  searchCooldown: 60,
  emptyCooldown: 60,
  nsfw: false,
  emitAddSongWhenCreatingQueue: true,
  emitAddListWhenCreatingQueue: true,
};

/**
 * Data that can be resolved to give a guild ID string. This can be:
 * - A guild ID string | a guild {@link https://discord.js.org/#/docs/main/master/class/Snowflake|Snowflake}
 * - A {@link https://discord.js.org/#/docs/main/master/class/Guild|Guild}
 * - A {@link https://discord.js.org/#/docs/main/master/class/Message|Message}
 * - A {@link https://discord.js.org/#/docs/main/master/class/TextChannel|TextChannel}
 * - A {@link https://discord.js.org/#/docs/main/master/class/VoiceChannel|VoiceChannel}
 * - A {@link https://discord.js.org/#/docs/main/master/class/StageChannel|StageChannel}
 * - A {@link https://discord.js.org/#/docs/main/master/class/VoiceState|VoiceState}
 * - A {@link https://discord.js.org/#/docs/main/master/class/GuildMember|GuildMember}
 * - A {@link https://discord.js.org/#/docs/main/master/class/Interaction|Interaction}
 * - A {@link Queue}
 * - A {@link DisTubeVoice}
 * @typedef {
 * Discord.Snowflake|
 * Discord.Message|
 * Discord.VoiceChannel|
 * Discord.StageChannel|
 * Discord.VoiceState|
 * Discord.TextChannel|
 * Discord.GuildMember|
 * Discord.Interaction|
 * DisTubeVoice|
 * Queue|
 * string
 * } GuildIDResolvable
 */
/**
 * FFmpeg Filters
 * ```
 * {
 *   "Filter Name": "Filter Value",
 *   "bassboost":   "bass=g=10"
 * }
 * ```
 * @typedef {Object.<string, string>} Filters
 * @see {@link defaultFilters}
 */

/**
 * The repeat mode of a {@link Queue} (enum)
 * * `DISABLED` = 0
 * * `SONG` = 1
 * * `QUEUE` = 2
 * @typedef {number} RepeatMode
 */
export enum RepeatMode {
  DISABLED,
  SONG,
  QUEUE,
}

/**
 * All available plugin types:
 * * `custom`: {@link CustomPlugin}
 * * `extractor`: {@link ExtractorPlugin}
 * @typedef {"custom"|"extractor"} PluginType
 */
export enum PluginType {
  CUSTOM = "custom",
  EXTRACTOR = "extractor",
}
