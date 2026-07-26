/* eslint-disable */
import { getLocale, experimentalStaticLocale } from "../runtime.js"

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Notfound_Message1Inputs */
/** @typedef {{}} Goback1Inputs */
/** @typedef {{}} Startover1Inputs */
/** @typedef {{}} Tryagain1Inputs */
/** @typedef {{}} Home_PageInputs */
/** @typedef {{}} About_PageInputs */
/** @typedef {{}} Example_MessageInputs */
/** @typedef {{}} Language_LabelInputs */
/** @typedef {{ locale: NonNullable<unknown> }} Current_LocaleInputs */
/** @typedef {{}} Saved_Cookie_Sentinel19Inputs */
/** @typedef {{}} EnInputs */
/** @typedef {{}} ZhInputs */
/** @typedef {{}} Zh_CnInputs */
/** @typedef {{}} EsInputs */
/** @typedef {{}} FrInputs */
/** @typedef {{}} DeInputs */
/** @typedef {{}} ItInputs */
/** @typedef {{}} JaInputs */
/** @typedef {{}} KoInputs */
/** @typedef {{}} PtInputs */
/** @typedef {{}} RuInputs */
/** @typedef {{}} ViInputs */
/** @typedef {{}} ArInputs */
/** @typedef {{}} HiInputs */
/** @typedef {{}} ThInputs */
/** @typedef {{}} IdInputs */
/** @typedef {{}} MsInputs */
/** @typedef {{}} TlInputs */
/** @typedef {{}} MyInputs */
/** @typedef {{}} KmInputs */
/** @typedef {{}} LoInputs */
/** @typedef {{}} MnInputs */
/** @typedef {{}} NeInputs */
/** @typedef {{}} UrInputs */
/** @typedef {{}} BnInputs */
/** @typedef {{}} LanguageInputs */
/** @typedef {{}} Settings_Language_DescriptionInputs */
/** @typedef {{}} GeneralInputs */
/** @typedef {{}} ShortcutsInputs */
/** @typedef {{}} AppearanceInputs */
/** @typedef {{}} Color_SchemeInputs */
/** @typedef {{}} Settings_Color_SchemeInputs */
/** @typedef {{}} SystemInputs */
/** @typedef {{}} LightInputs */
/** @typedef {{}} DarkInputs */
/** @typedef {{}} Task_Runlog1Inputs */
/** @typedef {{}} Task_Emptylog1Inputs */
/** @typedef {{}} SigninInputs */
/** @typedef {{}} Signindescription1Inputs */
/** @typedef {{}} Tosignup2Inputs */
/** @typedef {{}} SignupInputs */
/** @typedef {{}} Signupdescription1Inputs */
/** @typedef {{}} Tosignin2Inputs */
/** @typedef {{}} Createaccount1Inputs */
/** @typedef {{}} MonthInputs */
/** @typedef {{}} YearInputs */
/** @typedef {{}} ExpandedInputs */
/** @typedef {{}} TopInputs */
/** @typedef {{}} BottomInputs */
/** @typedef {{}} _NullInputs */
/** @typedef {{}} Sortmethod1Inputs */
/** @typedef {{}} Sort_RelevanceInputs */
/** @typedef {{}} Sort_DownloadsInputs */
/** @typedef {{}} Sort_LikesInputs */
/** @typedef {{}} Sort_Publishedat1Inputs */
/** @typedef {{}} Sort_Updated_AtInputs */
/** @typedef {{}} Online_OnlineInputs */
/** @typedef {{}} Online_IdleInputs */
/** @typedef {{}} Online_DndInputs */
/** @typedef {{}} Online_OfflineInputs */
/** @typedef {{}} Online_InvisibleInputs */
/** @typedef {{}} Projecttype_All1Inputs */
/** @typedef {{}} Projecttype_Mod1Inputs */
/** @typedef {{}} Projecttype_Modpack1Inputs */
/** @typedef {{}} Projecttype_Resourcepack1Inputs */
/** @typedef {{}} Projecttype_Datapack1Inputs */
/** @typedef {{}} Projecttype_Pack1Inputs */
/** @typedef {{}} Projecttype_Plugin1Inputs */
/** @typedef {{}} Projecttype_Shader1Inputs */
/** @typedef {{}} Projecttype_World1Inputs */
/** @typedef {{}} Projecttype_Project1Inputs */
/** @typedef {{}} Projecttype_User1Inputs */
/** @typedef {{}} Projecttype_Server1Inputs */
/** @typedef {{}} Projecttype_Community1Inputs */
/** @typedef {{}} Projecttype_Other1Inputs */
/** @typedef {{}} Loader_FabricInputs */
/** @typedef {{}} Loader_NeoforgeInputs */
/** @typedef {{}} Loader_ForgeInputs */
/** @typedef {{}} Loader_QuiltInputs */
/** @typedef {{}} Loader_LiteloaderInputs */
/** @typedef {{}} Loader_RiftInputs */
/** @typedef {{}} Loader_OrnitheInputs */
/** @typedef {{}} Loader_NilloaderInputs */
/** @typedef {{}} Loader_Legacy_FabricInputs */
/** @typedef {{}} Loader_BtababricInputs */
/** @typedef {{}} Loader_BabricInputs */
/** @typedef {{}} Loader_Risugami_S_ModloaderInputs */
/** @typedef {{}} Loader_JavaagentInputs */
/** @typedef {{}} Loader_PaperInputs */
/** @typedef {{}} Loader_PurpurInputs */
/** @typedef {{}} Loader_SpigotInputs */
/** @typedef {{}} Loader_BukkitInputs */
/** @typedef {{}} Loader_SpongeInputs */
/** @typedef {{}} Loader_FoliaInputs */
/** @typedef {{}} Loader_BungeecordInputs */
/** @typedef {{}} Loader_VelocityInputs */
/** @typedef {{}} Loader_WaterfallInputs */
/** @typedef {{}} Loader_Geyser_ExtensionInputs */
/** @typedef {{}} Loader_DatapackInputs */
/** @typedef {{}} Loader_ResourcepackInputs */
/** @typedef {{}} Loader_OptifineInputs */
/** @typedef {{}} Loader_IrisInputs */
/** @typedef {{}} Loader_CanvasInputs */
/** @typedef {{}} Loader_VanillaInputs */
/** @typedef {{}} Contentcategory_Mod1Inputs */
/** @typedef {{}} Contentcategory_Map1Inputs */
/** @typedef {{}} Contentcategory_Texture1Inputs */
/** @typedef {{}} Contentcategory_Datapack1Inputs */
/** @typedef {{}} Contentcategory_Shader1Inputs */
/** @typedef {{}} Contentcategory_Modpack1Inputs */
/** @typedef {{}} Contentcategory_Character1Inputs */
/** @typedef {{}} Contentcategory_Build1Inputs */
/** @typedef {{}} Contentcategory_Server1Inputs */
/** @typedef {{}} Contentcategory_Audio1Inputs */
/** @typedef {{}} Contentcategory_Tool1Inputs */
/** @typedef {{}} Contentcategory_Docs1Inputs */
/** @typedef {{}} Contentcategory_User1Inputs */
/** @typedef {{}} Contentcategory_All1Inputs */
/** @typedef {{}} Tag_AdventureInputs */
/** @typedef {{}} Tag_CursedInputs */
/** @typedef {{}} Tag_DecorationInputs */
/** @typedef {{}} Tag_EconomyInputs */
/** @typedef {{}} Tag_EquipmentInputs */
/** @typedef {{}} Tag_FoodInputs */
/** @typedef {{}} Tag_Game_MechanicsInputs */
/** @typedef {{}} Tag_LibraryInputs */
/** @typedef {{}} Tag_MagicInputs */
/** @typedef {{}} Tag_ManagementInputs */
/** @typedef {{}} Tag_MinigameInputs */
/** @typedef {{}} Tag_MobsInputs */
/** @typedef {{}} Tag_OptimizationInputs */
/** @typedef {{}} Tag_SocialInputs */
/** @typedef {{}} Tag_StorageInputs */
/** @typedef {{}} Tag_TechnologyInputs */
/** @typedef {{}} Tag_TransportationInputs */
/** @typedef {{}} Tag_UtilityInputs */
/** @typedef {{}} Tag_World_GenInputs */
/** @typedef {{}} Tag_CombatInputs */
/** @typedef {{}} Tag_ModdedInputs */
/** @typedef {{}} Tag_RealisticInputs */
/** @typedef {{}} Tag_SimplisticInputs */
/** @typedef {{}} Tag_ThemedInputs */
/** @typedef {{}} Tag_TweaksInputs */
/** @typedef {{}} Tag_Vanilla_LikeInputs */
/** @typedef {{}} Tag_AudioInputs */
/** @typedef {{}} Tag_BlocksInputs */
/** @typedef {{}} Tag_Core_ShadersInputs */
/** @typedef {{}} Tag_EntitiesInputs */
/** @typedef {{}} Tag_EnvironmentInputs */
/** @typedef {{}} Tag_FontsInputs */
/** @typedef {{}} Tag_GuiInputs */
/** @typedef {{}} Tag_ItemsInputs */
/** @typedef {{}} Tag_LanguageInputs */
/** @typedef {{}} Tag_ModelsInputs */
/** @typedef {{}} Tag_8x_Inputs */
/** @typedef {{}} Tag_16xInputs */
/** @typedef {{}} Tag_32xInputs */
/** @typedef {{}} Tag_64xInputs */
/** @typedef {{}} Tag_128xInputs */
/** @typedef {{}} Tag_256xInputs */
/** @typedef {{}} Tag_512x_Inputs */
/** @typedef {{}} Tag_CartoonInputs */
/** @typedef {{}} Tag_FantasyInputs */
/** @typedef {{}} Tag_Semi_RealisticInputs */
/** @typedef {{}} Tag_AtmosphereInputs */
/** @typedef {{}} Tag_BloomInputs */
/** @typedef {{}} Tag_Colored_LightingInputs */
/** @typedef {{}} Tag_FoliageInputs */
/** @typedef {{}} Tag_Path_TracingInputs */
/** @typedef {{}} Tag_PbrInputs */
/** @typedef {{}} Tag_ReflectionsInputs */
/** @typedef {{}} Tag_ShadowsInputs */
/** @typedef {{}} Tag_HighInputs */
/** @typedef {{}} Tag_LowInputs */
/** @typedef {{}} Tag_MediumInputs */
/** @typedef {{}} Tag_PotatoInputs */
/** @typedef {{}} Tag_ScreenshotInputs */
/** @typedef {{}} Tag_ChallengingInputs */
/** @typedef {{}} Tag_Kitchen_SinkInputs */
/** @typedef {{}} Tag_LightweightInputs */
/** @typedef {{}} Tag_MultiplayerInputs */
/** @typedef {{}} Tag_QuestsInputs */
/** @typedef {{}} Performance_ImpactInputs */
/** @typedef {{}} FeaturesInputs */
/** @typedef {{}} ResolutionsInputs */
/** @typedef {{}} CategoriesInputs */
/** @typedef {{}} LicenseInputs */
/** @typedef {{}} Opensource1Inputs */
/** @typedef {{}} Environment_ClientInputs */
/** @typedef {{}} Environment_ServerInputs */
/** @typedef {{}} Environment_Client_And_ServerInputs */
/** @typedef {{}} Environment_Client_Server_OptionalInputs */
/** @typedef {{}} Environment_Server_Client_OptionalInputs */
/** @typedef {{}} Environment_Client_Optional_Server_OptionalInputs */
/** @typedef {{}} Environment_Client_Or_ServerInputs */
/** @typedef {{}} Environment_Dedicated_ServerInputs */
/** @typedef {{}} Versiontype_Release1Inputs */
/** @typedef {{}} Versiontype_Beta1Inputs */
/** @typedef {{}} Versiontype_Alpha1Inputs */
/** @typedef {{}} Versiontype_Stable1Inputs */
/** @typedef {{}} Versiontype_Snapshot1Inputs */
/** @typedef {{}} Versiontype_Old_Beta1Inputs */
/** @typedef {{}} Versiontype_Old_Alpha1Inputs */
/** @typedef {{}} Status_PendingInputs */
/** @typedef {{}} Status_ApprovedInputs */
/** @typedef {{}} Status_RejectedInputs */
/** @typedef {{}} Status_ActiveInputs */
/** @typedef {{}} Status_ExpiredInputs */
/** @typedef {{}} Status_RevokedInputs */
/** @typedef {{}} Identityrequestaction_Create2Inputs */
/** @typedef {{}} Identityrequestaction_Update2Inputs */
/** @typedef {{}} Identitytype_Appreciator1Inputs */
/** @typedef {{}} Identitytype_Creator1Inputs */
/** @typedef {{}} Identitytype_Producer1Inputs */
/** @typedef {{}} Identitytype_Builder1Inputs */
/** @typedef {{}} Identitytype_Investor1Inputs */
/** @typedef {{}} Teamidentity_Appreciator1Inputs */
/** @typedef {{}} Teamidentity_Creator1Inputs */
/** @typedef {{}} Teamidentity_Producer1Inputs */
/** @typedef {{}} Teamidentity_Investor1Inputs */
/** @typedef {{}} Team_OwnerInputs */
/** @typedef {{}} Team_AdminInputs */
/** @typedef {{}} Team_MemberInputs */
/** @typedef {{}} Framework_DescriptionInputs */
/** @typedef {{}} Full_Stack_DescriptionInputs */
/** @typedef {{}} Documentation_ButtonInputs */
/** @typedef {{}} Edit_InstructionInputs */
/** @typedef {{}} Powerful_Server_Functions_TitleInputs */
/** @typedef {{}} Powerful_Server_Functions_DescriptionInputs */
/** @typedef {{}} Flexible_Server_Side_Rendering_TitleInputs */
/** @typedef {{}} Flexible_Server_Side_Rendering_DescriptionInputs */
/** @typedef {{}} Api_Routes_TitleInputs */
/** @typedef {{}} Api_Routes_DescriptionInputs */
/** @typedef {{}} Strongly_Typed_Everything_TitleInputs */
/** @typedef {{}} Strongly_Typed_Everything_DescriptionInputs */
/** @typedef {{}} Full_Streaming_Support_TitleInputs */
/** @typedef {{}} Full_Streaming_Support_DescriptionInputs */
/** @typedef {{}} Next_Generation_Ready_TitleInputs */
/** @typedef {{}} Next_Generation_Ready_DescriptionInputs */
/** @typedef {{}} Common_BackInputs */
/** @typedef {{}} Common_CancelInputs */
/** @typedef {{}} Common_CloseInputs */
/** @typedef {{}} Common_LoadingInputs */
/** @typedef {{}} Common_Sentenceend1Inputs */
/** @typedef {{}} Common_WaitingInputs */
/** @typedef {{}} Home_Createtitle1Inputs */
/** @typedef {{}} Home_Youtubelabel1Inputs */
/** @typedef {{}} Home_Bilibililabel1Inputs */
/** @typedef {{}} Home_Localvideolabel2Inputs */
/** @typedef {{}} Home_Localdirectionlabel2Inputs */
/** @typedef {{}} Home_Localenzh2Inputs */
/** @typedef {{}} Home_Localzhen2Inputs */
/** @typedef {{}} Home_SubmittingInputs */
/** @typedef {{}} Home_Createtask1Inputs */
/** @typedef {{}} Home_Taskhistory1Inputs */
/** @typedef {{}} Home_EmptyInputs */
/** @typedef {{}} Home_Loaderror1Inputs */
/** @typedef {{}} Home_Createerror1Inputs */
/** @typedef {{}} Task_OverviewInputs */
/** @typedef {{}} Task_TitleInputs */
/** @typedef {{}} Task_Taskid1Inputs */
/** @typedef {{}} Task_CreatedInputs */
/** @typedef {{}} Task_StartedInputs */
/** @typedef {{}} Task_CompletedInputs */
/** @typedef {{}} Task_SessionInputs */
/** @typedef {{}} Task_LoadingInputs */
/** @typedef {{}} Task_Finalvideo1Inputs */
/** @typedef {{}} Task_DownloadInputs */
/** @typedef {{}} Task_StagesInputs */
/** @typedef {{}} Task_Resumehelp1Inputs */
/** @typedef {{}} Task_ResumingInputs */
/** @typedef {{}} Task_Resumetask1Inputs */
/** @typedef {{}} Task_Dangerzone1Inputs */
/** @typedef {{}} Task_Rerunhelp1Inputs */
/** @typedef {{}} Task_Reruntask1Inputs */
/** @typedef {{}} Task_Reruntitle1Inputs */
/** @typedef {{}} Task_Rerundescription1Inputs */
/** @typedef {{}} Task_RerunningInputs */
/** @typedef {{}} Task_Confirmrerun1Inputs */
/** @typedef {{}} Task_Deletehelp1Inputs */
/** @typedef {{}} Task_Deletetask1Inputs */
/** @typedef {{}} Task_Deletetitle1Inputs */
/** @typedef {{}} Task_Deletedescription1Inputs */
/** @typedef {{}} Task_DeletingInputs */
/** @typedef {{}} Task_Confirmdelete1Inputs */
/** @typedef {{}} Task_Runninglocked1Inputs */
/** @typedef {{}} Task_Loaderror1Inputs */
/** @typedef {{}} Task_Deleteerror1Inputs */
/** @typedef {{}} Task_Rerunerror1Inputs */
/** @typedef {{}} Task_Resumeerror1Inputs */
/** @typedef {{}} Stage_RootInputs */
/** @typedef {{}} Stage_SeparateInputs */
/** @typedef {{}} Stage_Separate_AfterInputs */
/** @typedef {{}} Stage_AsrInputs */
/** @typedef {{}} Stage_Asr_Ocr_PreInputs */
/** @typedef {{}} Stage_Asr_OcrInputs */
/** @typedef {{}} Stage_Asr_Ocr_FixInputs */
/** @typedef {{}} Stage_TranslateInputs */
/** @typedef {{}} Stage_Split_AudioInputs */
/** @typedef {{}} Stage_TtsInputs */
/** @typedef {{}} Stage_Merge_AudioInputs */
/** @typedef {{}} Stage_Merge_VideoInputs */
/** @typedef {{}} Settings_ButtonInputs */
/** @typedef {{}} Settings_TitleInputs */
/** @typedef {{}} Settings_DescriptionInputs */
/** @typedef {{}} Settings_LanguageInputs */
/** @typedef {{}} Settings_CookieInputs */
/** @typedef {{}} Settings_Savedcookie1Inputs */
/** @typedef {{}} Settings_Cookieplaceholder1Inputs */
/** @typedef {{}} Settings_Proxyport1Inputs */
/** @typedef {{}} Settings_Baseurl1Inputs */
/** @typedef {{}} Settings_Apikey1Inputs */
/** @typedef {{}} Settings_Apikeyplaceholder2Inputs */
/** @typedef {{}} Settings_Hideapikey2Inputs */
/** @typedef {{}} Settings_Showapikey2Inputs */
/** @typedef {{}} Settings_ModelInputs */
/** @typedef {{}} Settings_Selectmodel1Inputs */
/** @typedef {{}} Settings_LoadingInputs */
/** @typedef {{}} Settings_Getmodels1Inputs */
/** @typedef {{}} Settings_Translateconcurrency1Inputs */
/** @typedef {{}} Settings_Concurrencyhelp1Inputs */
/** @typedef {{}} Settings_SaveInputs */
/** @typedef {{}} Settings_Keysaved1Inputs */
/** @typedef {{}} Settings_SavedInputs */
/** @typedef {{}} Settings_Saveerror1Inputs */
/** @typedef {{}} Settings_Nomodels1Inputs */
/** @typedef {{}} Settings_Loadmodelserror2Inputs */
/** @typedef {{}} Status_QueuedInputs */
/** @typedef {{}} Status_RunningInputs */
/** @typedef {{}} Status_SuccessInputs */
/** @typedef {{}} Status_FailedInputs */
/** @typedef {{}} Stages_DownloadInputs */
/** @typedef {{}} Stages_SeparateInputs */
/** @typedef {{}} Stages_AsrInputs */
/** @typedef {{}} Stages_Asr_FixInputs */
/** @typedef {{}} Stages_TranslateInputs */
/** @typedef {{}} Stages_Split_AudioInputs */
/** @typedef {{}} Stages_TtsInputs */
/** @typedef {{}} Stages_Merge_AudioInputs */
/** @typedef {{}} Stages_Merge_VideoInputs */
/** @typedef {{}} Stages_DoneInputs */
/** @typedef {{ count: NonNullable<unknown> }} Activetaskstext2Inputs */
/** @typedef {{ count: NonNullable<unknown> }} Loadedmodelstext2Inputs */
/** @typedef {{}} Settings_Auto_SaveInputs */
/** @typedef {{ version: NonNullable<unknown> }} Env_Bun_PassInputs */
/** @typedef {{}} Env_Bun_FailInputs */
/** @typedef {{ version: NonNullable<unknown>, path: NonNullable<unknown> }} Env_Python_PassInputs */
/** @typedef {{}} Env_Python_FailInputs */
/** @typedef {{ version: NonNullable<unknown>, pythonPath: NonNullable<unknown> }} Env_Uv_PassInputs */
/** @typedef {{}} Env_Uv_FailInputs */
/** @typedef {{ version: NonNullable<unknown>, codecs: NonNullable<unknown> }} Env_Ffmpeg_PassInputs */
/** @typedef {{}} Env_Ffmpeg_FailInputs */
/** @typedef {{ version: NonNullable<unknown> }} Env_Cargo_PassInputs */
/** @typedef {{}} Env_Cargo_FailInputs */
/** @typedef {{}} Env_Vcpkg_PassInputs */
/** @typedef {{}} Env_Vcpkg_Fail_SubmoduleInputs */
/** @typedef {{}} Env_Vcpkg_Fail_BootstrapInputs */
/** @typedef {{}} Env_Vcpkg_SkipInputs */
/** @typedef {{ gpu: NonNullable<unknown> }} Env_Vulkan_PassInputs */
/** @typedef {{}} Env_Vulkan_FailInputs */
/** @typedef {{}} Env_Rocm_PassInputs */
/** @typedef {{}} Env_Rocm_FailInputs */
/** @typedef {{ version: NonNullable<unknown> }} Env_Cuda_PassInputs */
/** @typedef {{}} Env_Cuda_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Whisper_Ggml_PassInputs */
/** @typedef {{}} Env_Whisper_Ggml_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Whisper_Ggml_WarnInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Whisper_Vad_PassInputs */
/** @typedef {{}} Env_Whisper_Vad_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Whisper_Vad_WarnInputs */
/** @typedef {{}} Env_Whisper_Sherpa_PassInputs */
/** @typedef {{}} Env_Whisper_Sherpa_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Whisper_Onnx_PassInputs */
/** @typedef {{}} Env_Whisper_Onnx_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Whisper_Onnx_WarnInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Demucs_Pth_PassInputs */
/** @typedef {{}} Env_Demucs_Pth_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Demucs_Pth_WarnInputs */
/** @typedef {{ found: NonNullable<unknown>, total: NonNullable<unknown> }} Env_Demucs_Onnx_PassInputs */
/** @typedef {{ found: NonNullable<unknown>, total: NonNullable<unknown> }} Env_Demucs_Onnx_FailInputs */
/** @typedef {{ found: NonNullable<unknown>, total: NonNullable<unknown>, missing: NonNullable<unknown> }} Env_Demucs_Onnx_WarnInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Demucs_Ggml_PassInputs */
/** @typedef {{}} Env_Demucs_Ggml_FailInputs */
/** @typedef {{ size: NonNullable<unknown> }} Env_Demucs_Ggml_WarnInputs */
/** @typedef {{ found: NonNullable<unknown>, total: NonNullable<unknown> }} Env_Voxcpm2_Onnx_PassInputs */
/** @typedef {{ found: NonNullable<unknown>, total: NonNullable<unknown> }} Env_Voxcpm2_Onnx_FailInputs */
/** @typedef {{ found: NonNullable<unknown>, total: NonNullable<unknown>, missing: NonNullable<unknown> }} Env_Voxcpm2_Onnx_WarnInputs */
/** @typedef {{ modelSize: NonNullable<unknown>, vaeSize: NonNullable<unknown> }} Env_Voxcpm2_Pth_PassInputs */
/** @typedef {{ missing: NonNullable<unknown> }} Env_Voxcpm2_Pth_FailInputs */
/** @typedef {{ baseUrl: NonNullable<unknown>, models: NonNullable<unknown> }} Env_Openai_PassInputs */
/** @typedef {{ issues: NonNullable<unknown> }} Env_Openai_WarnInputs */
/** @typedef {{ issues: NonNullable<unknown> }} Env_Openai_FailInputs */
/** @typedef {{ issues: NonNullable<unknown> }} Env_Openai_SkipInputs */
/** @typedef {{}} Env_Dotenv_PassInputs */
/** @typedef {{}} Env_Dotenv_FailInputs */
/** @typedef {{ issues: NonNullable<unknown> }} Env_Dotenv_WarnInputs */
/** @typedef {{}} Env_Submodule_Whisper_Cpp_PassInputs */
/** @typedef {{}} Env_Submodule_Whisper_Cpp_FailInputs */
/** @typedef {{}} Env_Submodule_Demucs_Cpp_PassInputs */
/** @typedef {{}} Env_Submodule_Demucs_Cpp_FailInputs */
/** @typedef {{}} Env_Submodule_Demucs_Rs_PassInputs */
/** @typedef {{}} Env_Submodule_Demucs_Rs_FailInputs */
/** @typedef {{}} Env_Submodule_Voxcpm_Rs_PassInputs */
/** @typedef {{}} Env_Submodule_Voxcpm_Rs_FailInputs */
/** @typedef {{ path: NonNullable<unknown> }} Env_Whisper_Bin_PassInputs */
/** @typedef {{ path: NonNullable<unknown> }} Env_Whisper_Bin_WarnInputs */
/** @typedef {{}} Env_Whisper_Bin_FailInputs */
/** @typedef {{ path: NonNullable<unknown> }} Env_Demucs_Ggml_Bin_PassInputs */
/** @typedef {{ path: NonNullable<unknown> }} Env_Demucs_Ggml_Bin_WarnInputs */
/** @typedef {{}} Env_Demucs_Ggml_Bin_FailInputs */
/** @typedef {{ binaries: NonNullable<unknown> }} Env_Voxcpm_Burn_Bin_PassInputs */
/** @typedef {{}} Env_Voxcpm_Burn_Bin_WarnInputs */
/** @typedef {{}} Env_Voxcpm_Burn_Bin_FailInputs */
/** @typedef {{ binaries: NonNullable<unknown> }} Env_Demucs_Burn_Bin_PassInputs */
/** @typedef {{}} Env_Demucs_Burn_Bin_WarnInputs */
/** @typedef {{}} Env_Demucs_Burn_Bin_FailInputs */
/** @typedef {{ path: NonNullable<unknown> }} Env_Ocr_Cpp_Bin_PassInputs */
/** @typedef {{ path: NonNullable<unknown> }} Env_Ocr_Cpp_Bin_WarnInputs */
/** @typedef {{}} Env_Ocr_Cpp_Bin_FailInputs */
/** @typedef {{ version: NonNullable<unknown> }} Env_Cmake_PassInputs */
/** @typedef {{}} Env_Cmake_FailInputs */
/** @typedef {{ version: NonNullable<unknown> }} Env_Git_PassInputs */
/** @typedef {{}} Env_Git_FailInputs */
import * as __zh_cn from "./zh-cn.js"
import * as __en from "./en.js"
/**
* | output |
* | --- |
* | "The page you are looking for does not exist." |
*
* @param {Notfound_Message1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const notfound_message1 = /** @type {((inputs?: Notfound_Message1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notfound_Message1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.notfound_message1(inputs)
	return __en.notfound_message1(inputs)
});
export { notfound_message1 as "notFound_message" }
/**
* | output |
* | --- |
* | "Go Back" |
*
* @param {Goback1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const goback1 = /** @type {((inputs?: Goback1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Goback1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.goback1(inputs)
	return __en.goback1(inputs)
});
export { goback1 as "goBack" }
/**
* | output |
* | --- |
* | "Start Over" |
*
* @param {Startover1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const startover1 = /** @type {((inputs?: Startover1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Startover1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.startover1(inputs)
	return __en.startover1(inputs)
});
export { startover1 as "startOver" }
/**
* | output |
* | --- |
* | "Try Again" |
*
* @param {Tryagain1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tryagain1 = /** @type {((inputs?: Tryagain1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tryagain1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tryagain1(inputs)
	return __en.tryagain1(inputs)
});
export { tryagain1 as "tryAgain" }
/**
* | output |
* | --- |
* | "Home page" |
*
* @param {Home_PageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const home_page = /** @type {((inputs?: Home_PageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_PageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_page(inputs)
	return __en.home_page(inputs)
});
/**
* | output |
* | --- |
* | "About page" |
*
* @param {About_PageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const about_page = /** @type {((inputs?: About_PageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<About_PageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.about_page(inputs)
	return __en.about_page(inputs)
});
/**
* | output |
* | --- |
* | "Welcome to your i18n app." |
*
* @param {Example_MessageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const example_message = /** @type {((inputs?: Example_MessageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Example_MessageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.example_message(inputs)
	return __en.example_message(inputs)
});
/**
* | output |
* | --- |
* | "Language" |
*
* @param {Language_LabelInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const language_label = /** @type {((inputs?: Language_LabelInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Language_LabelInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.language_label(inputs)
	return __en.language_label(inputs)
});
/**
* | output |
* | --- |
* | "Current locale: {locale}" |
*
* @param {Current_LocaleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const current_locale = /** @type {((inputs: Current_LocaleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Current_LocaleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.current_locale(inputs)
	return __en.current_locale(inputs)
});
/**
* | output |
* | --- |
* | "__YOUDUB_SAVED_COOKIE__" |
*
* @param {Saved_Cookie_Sentinel19Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const saved_cookie_sentinel19 = /** @type {((inputs?: Saved_Cookie_Sentinel19Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Saved_Cookie_Sentinel19Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.saved_cookie_sentinel19(inputs)
	return __en.saved_cookie_sentinel19(inputs)
});
export { saved_cookie_sentinel19 as "SAVED_COOKIE_SENTINEL" }
/**
* | output |
* | --- |
* | "English" |
*
* @param {EnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const en = /** @type {((inputs?: EnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.en(inputs)
	return __en.en(inputs)
});
/**
* | output |
* | --- |
* | "中文" |
*
* @param {ZhInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const zh = /** @type {((inputs?: ZhInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ZhInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.zh(inputs)
	return __en.zh(inputs)
});
/**
* | output |
* | --- |
* | "简体中文" |
*
* @param {Zh_CnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const zh_cn = /** @type {((inputs?: Zh_CnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Zh_CnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.zh_cn(inputs)
	return __en.zh_cn(inputs)
});
export { zh_cn as "zh-cn" }
/**
* | output |
* | --- |
* | "Español" |
*
* @param {EsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const es = /** @type {((inputs?: EsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.es(inputs)
	return __en.es(inputs)
});
/**
* | output |
* | --- |
* | "Français" |
*
* @param {FrInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const fr = /** @type {((inputs?: FrInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FrInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.fr(inputs)
	return __en.fr(inputs)
});
/**
* | output |
* | --- |
* | "Deutsch" |
*
* @param {DeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const de = /** @type {((inputs?: DeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.de(inputs)
	return __en.de(inputs)
});
/**
* | output |
* | --- |
* | "Italiano" |
*
* @param {ItInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const it = /** @type {((inputs?: ItInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ItInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.it(inputs)
	return __en.it(inputs)
});
/**
* | output |
* | --- |
* | "日本語" |
*
* @param {JaInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ja = /** @type {((inputs?: JaInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<JaInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ja(inputs)
	return __en.ja(inputs)
});
/**
* | output |
* | --- |
* | "한국어" |
*
* @param {KoInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ko = /** @type {((inputs?: KoInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<KoInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ko(inputs)
	return __en.ko(inputs)
});
/**
* | output |
* | --- |
* | "Português" |
*
* @param {PtInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const pt = /** @type {((inputs?: PtInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<PtInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.pt(inputs)
	return __en.pt(inputs)
});
/**
* | output |
* | --- |
* | "Русский" |
*
* @param {RuInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ru = /** @type {((inputs?: RuInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<RuInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ru(inputs)
	return __en.ru(inputs)
});
/**
* | output |
* | --- |
* | "Tiếng Việt" |
*
* @param {ViInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const vi = /** @type {((inputs?: ViInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ViInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.vi(inputs)
	return __en.vi(inputs)
});
/**
* | output |
* | --- |
* | "العربية" |
*
* @param {ArInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ar = /** @type {((inputs?: ArInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ArInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ar(inputs)
	return __en.ar(inputs)
});
/**
* | output |
* | --- |
* | "हिन्दी" |
*
* @param {HiInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const hi = /** @type {((inputs?: HiInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<HiInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.hi(inputs)
	return __en.hi(inputs)
});
/**
* | output |
* | --- |
* | "ไทย" |
*
* @param {ThInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const th = /** @type {((inputs?: ThInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ThInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.th(inputs)
	return __en.th(inputs)
});
/**
* | output |
* | --- |
* | "Bahasa Indonesia" |
*
* @param {IdInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const id = /** @type {((inputs?: IdInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<IdInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.id(inputs)
	return __en.id(inputs)
});
/**
* | output |
* | --- |
* | "Bahasa Melayu" |
*
* @param {MsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ms = /** @type {((inputs?: MsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<MsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ms(inputs)
	return __en.ms(inputs)
});
/**
* | output |
* | --- |
* | "Tagalog" |
*
* @param {TlInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tl = /** @type {((inputs?: TlInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TlInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tl(inputs)
	return __en.tl(inputs)
});
/**
* | output |
* | --- |
* | "မြန်မာဘာသာ" |
*
* @param {MyInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const my = /** @type {((inputs?: MyInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<MyInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.my(inputs)
	return __en.my(inputs)
});
/**
* | output |
* | --- |
* | "ភាសាខ្មែរ" |
*
* @param {KmInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const km = /** @type {((inputs?: KmInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<KmInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.km(inputs)
	return __en.km(inputs)
});
/**
* | output |
* | --- |
* | "ລາວ" |
*
* @param {LoInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const lo = /** @type {((inputs?: LoInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LoInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.lo(inputs)
	return __en.lo(inputs)
});
/**
* | output |
* | --- |
* | "Монгол" |
*
* @param {MnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const mn = /** @type {((inputs?: MnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<MnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.mn(inputs)
	return __en.mn(inputs)
});
/**
* | output |
* | --- |
* | "नेपाली" |
*
* @param {NeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ne = /** @type {((inputs?: NeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<NeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ne(inputs)
	return __en.ne(inputs)
});
/**
* | output |
* | --- |
* | "اردو" |
*
* @param {UrInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const ur = /** @type {((inputs?: UrInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UrInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.ur(inputs)
	return __en.ur(inputs)
});
/**
* | output |
* | --- |
* | "বাংলা" |
*
* @param {BnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const bn = /** @type {((inputs?: BnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<BnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.bn(inputs)
	return __en.bn(inputs)
});
/**
* | output |
* | --- |
* | "Language" |
*
* @param {LanguageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const language = /** @type {((inputs?: LanguageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LanguageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.language(inputs)
	return __en.language(inputs)
});
/**
* | output |
* | --- |
* | "Change the display language" |
*
* @param {Settings_Language_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_language_description = /** @type {((inputs?: Settings_Language_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Language_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_language_description(inputs)
	return __en.settings_language_description(inputs)
});
/**
* | output |
* | --- |
* | "General" |
*
* @param {GeneralInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const general = /** @type {((inputs?: GeneralInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<GeneralInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.general(inputs)
	return __en.general(inputs)
});
/**
* | output |
* | --- |
* | "Shortcuts" |
*
* @param {ShortcutsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const shortcuts = /** @type {((inputs?: ShortcutsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ShortcutsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.shortcuts(inputs)
	return __en.shortcuts(inputs)
});
/**
* | output |
* | --- |
* | "Appearance" |
*
* @param {AppearanceInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const appearance = /** @type {((inputs?: AppearanceInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<AppearanceInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.appearance(inputs)
	return __en.appearance(inputs)
});
/**
* | output |
* | --- |
* | "Color scheme" |
*
* @param {Color_SchemeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const color_scheme = /** @type {((inputs?: Color_SchemeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Color_SchemeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.color_scheme(inputs)
	return __en.color_scheme(inputs)
});
/**
* | output |
* | --- |
* | "Choose system, light, or dark theme" |
*
* @param {Settings_Color_SchemeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_color_scheme = /** @type {((inputs?: Settings_Color_SchemeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Color_SchemeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_color_scheme(inputs)
	return __en.settings_color_scheme(inputs)
});
/**
* | output |
* | --- |
* | "System" |
*
* @param {SystemInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const system = /** @type {((inputs?: SystemInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SystemInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.system(inputs)
	return __en.system(inputs)
});
/**
* | output |
* | --- |
* | "Light" |
*
* @param {LightInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const light = /** @type {((inputs?: LightInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LightInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.light(inputs)
	return __en.light(inputs)
});
/**
* | output |
* | --- |
* | "Dark" |
*
* @param {DarkInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const dark = /** @type {((inputs?: DarkInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DarkInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.dark(inputs)
	return __en.dark(inputs)
});
/**
* | output |
* | --- |
* | "Run log" |
*
* @param {Task_Runlog1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_runlog1 = /** @type {((inputs?: Task_Runlog1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Runlog1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_runlog1(inputs)
	return __en.task_runlog1(inputs)
});
export { task_runlog1 as "task_runLog" }
/**
* | output |
* | --- |
* | "Logs will appear once the task starts." |
*
* @param {Task_Emptylog1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_emptylog1 = /** @type {((inputs?: Task_Emptylog1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Emptylog1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_emptylog1(inputs)
	return __en.task_emptylog1(inputs)
});
export { task_emptylog1 as "task_emptyLog" }
/**
* | output |
* | --- |
* | "Sign in" |
*
* @param {SigninInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const signin = /** @type {((inputs?: SigninInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SigninInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.signin(inputs)
	return __en.signin(inputs)
});
/**
* | output |
* | --- |
* | "Enter your email below to login to your account" |
*
* @param {Signindescription1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const signindescription1 = /** @type {((inputs?: Signindescription1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signindescription1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.signindescription1(inputs)
	return __en.signindescription1(inputs)
});
export { signindescription1 as "signinDescription" }
/**
* | output |
* | --- |
* | "Don't have an account? Sign up" |
*
* @param {Tosignup2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tosignup2 = /** @type {((inputs?: Tosignup2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tosignup2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tosignup2(inputs)
	return __en.tosignup2(inputs)
});
export { tosignup2 as "toSignUp" }
/**
* | output |
* | --- |
* | "Sign up" |
*
* @param {SignupInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const signup = /** @type {((inputs?: SignupInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SignupInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.signup(inputs)
	return __en.signup(inputs)
});
/**
* | output |
* | --- |
* | "Enter your information to create an account" |
*
* @param {Signupdescription1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const signupdescription1 = /** @type {((inputs?: Signupdescription1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signupdescription1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.signupdescription1(inputs)
	return __en.signupdescription1(inputs)
});
export { signupdescription1 as "signupDescription" }
/**
* | output |
* | --- |
* | "Already have an account? Sign in" |
*
* @param {Tosignin2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tosignin2 = /** @type {((inputs?: Tosignin2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tosignin2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tosignin2(inputs)
	return __en.tosignin2(inputs)
});
export { tosignin2 as "toSignIn" }
/**
* | output |
* | --- |
* | "Create account" |
*
* @param {Createaccount1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const createaccount1 = /** @type {((inputs?: Createaccount1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Createaccount1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.createaccount1(inputs)
	return __en.createaccount1(inputs)
});
export { createaccount1 as "createAccount" }
/**
* | output |
* | --- |
* | "month" |
*
* @param {MonthInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const month = /** @type {((inputs?: MonthInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<MonthInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.month(inputs)
	return __en.month(inputs)
});
/**
* | output |
* | --- |
* | "year" |
*
* @param {YearInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const year = /** @type {((inputs?: YearInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<YearInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.year(inputs)
	return __en.year(inputs)
});
/**
* | output |
* | --- |
* | "Expanded" |
*
* @param {ExpandedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const expanded = /** @type {((inputs?: ExpandedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ExpandedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.expanded(inputs)
	return __en.expanded(inputs)
});
/**
* | output |
* | --- |
* | "Top" |
*
* @param {TopInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const top = /** @type {((inputs?: TopInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TopInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.top(inputs)
	return __en.top(inputs)
});
/**
* | output |
* | --- |
* | "Bottom" |
*
* @param {BottomInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const bottom = /** @type {((inputs?: BottomInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<BottomInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.bottom(inputs)
	return __en.bottom(inputs)
});
/**
* | output |
* | --- |
* | "None" |
*
* @param {_NullInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const _null = /** @type {((inputs?: _NullInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<_NullInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn._null(inputs)
	return __en._null(inputs)
});
export { _null as "null" }
/**
* | output |
* | --- |
* | "Sort by" |
*
* @param {Sortmethod1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const sortmethod1 = /** @type {((inputs?: Sortmethod1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sortmethod1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.sortmethod1(inputs)
	return __en.sortmethod1(inputs)
});
export { sortmethod1 as "sortMethod" }
/**
* | output |
* | --- |
* | "Relevance" |
*
* @param {Sort_RelevanceInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_relevance = /** @type {((inputs?: Sort_RelevanceInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_RelevanceInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.sort_relevance(inputs)
	return __en.sort_relevance(inputs)
});
/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Sort_DownloadsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_downloads = /** @type {((inputs?: Sort_DownloadsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_DownloadsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.sort_downloads(inputs)
	return __en.sort_downloads(inputs)
});
/**
* | output |
* | --- |
* | "Likes" |
*
* @param {Sort_LikesInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_likes = /** @type {((inputs?: Sort_LikesInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_LikesInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.sort_likes(inputs)
	return __en.sort_likes(inputs)
});
/**
* | output |
* | --- |
* | "Published" |
*
* @param {Sort_Publishedat1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const sort_publishedat1 = /** @type {((inputs?: Sort_Publishedat1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_Publishedat1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.sort_publishedat1(inputs)
	return __en.sort_publishedat1(inputs)
});
export { sort_publishedat1 as "sort_publishedAt" }
/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Sort_Updated_AtInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_updated_at = /** @type {((inputs?: Sort_Updated_AtInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_Updated_AtInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.sort_updated_at(inputs)
	return __en.sort_updated_at(inputs)
});
/**
* | output |
* | --- |
* | "Online" |
*
* @param {Online_OnlineInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const online_online = /** @type {((inputs?: Online_OnlineInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Online_OnlineInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.online_online(inputs)
	return __en.online_online(inputs)
});
/**
* | output |
* | --- |
* | "Idle" |
*
* @param {Online_IdleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const online_idle = /** @type {((inputs?: Online_IdleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Online_IdleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.online_idle(inputs)
	return __en.online_idle(inputs)
});
/**
* | output |
* | --- |
* | "Do Not Disturb" |
*
* @param {Online_DndInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const online_dnd = /** @type {((inputs?: Online_DndInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Online_DndInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.online_dnd(inputs)
	return __en.online_dnd(inputs)
});
/**
* | output |
* | --- |
* | "Offline" |
*
* @param {Online_OfflineInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const online_offline = /** @type {((inputs?: Online_OfflineInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Online_OfflineInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.online_offline(inputs)
	return __en.online_offline(inputs)
});
/**
* | output |
* | --- |
* | "Invisible" |
*
* @param {Online_InvisibleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const online_invisible = /** @type {((inputs?: Online_InvisibleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Online_InvisibleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.online_invisible(inputs)
	return __en.online_invisible(inputs)
});
/**
* | output |
* | --- |
* | "All" |
*
* @param {Projecttype_All1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_all1 = /** @type {((inputs?: Projecttype_All1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_All1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_all1(inputs)
	return __en.projecttype_all1(inputs)
});
export { projecttype_all1 as "projectType_all" }
/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Projecttype_Mod1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_mod1 = /** @type {((inputs?: Projecttype_Mod1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Mod1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_mod1(inputs)
	return __en.projecttype_mod1(inputs)
});
export { projecttype_mod1 as "projectType_mod" }
/**
* | output |
* | --- |
* | "Modpack" |
*
* @param {Projecttype_Modpack1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_modpack1 = /** @type {((inputs?: Projecttype_Modpack1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Modpack1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_modpack1(inputs)
	return __en.projecttype_modpack1(inputs)
});
export { projecttype_modpack1 as "projectType_modpack" }
/**
* | output |
* | --- |
* | "Resource Pack" |
*
* @param {Projecttype_Resourcepack1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_resourcepack1 = /** @type {((inputs?: Projecttype_Resourcepack1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Resourcepack1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_resourcepack1(inputs)
	return __en.projecttype_resourcepack1(inputs)
});
export { projecttype_resourcepack1 as "projectType_resourcepack" }
/**
* | output |
* | --- |
* | "Datapack" |
*
* @param {Projecttype_Datapack1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_datapack1 = /** @type {((inputs?: Projecttype_Datapack1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Datapack1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_datapack1(inputs)
	return __en.projecttype_datapack1(inputs)
});
export { projecttype_datapack1 as "projectType_datapack" }
/**
* | output |
* | --- |
* | "Pack" |
*
* @param {Projecttype_Pack1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_pack1 = /** @type {((inputs?: Projecttype_Pack1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Pack1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_pack1(inputs)
	return __en.projecttype_pack1(inputs)
});
export { projecttype_pack1 as "projectType_pack" }
/**
* | output |
* | --- |
* | "Plugin" |
*
* @param {Projecttype_Plugin1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_plugin1 = /** @type {((inputs?: Projecttype_Plugin1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Plugin1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_plugin1(inputs)
	return __en.projecttype_plugin1(inputs)
});
export { projecttype_plugin1 as "projectType_plugin" }
/**
* | output |
* | --- |
* | "Shader" |
*
* @param {Projecttype_Shader1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_shader1 = /** @type {((inputs?: Projecttype_Shader1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Shader1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_shader1(inputs)
	return __en.projecttype_shader1(inputs)
});
export { projecttype_shader1 as "projectType_shader" }
/**
* | output |
* | --- |
* | "World" |
*
* @param {Projecttype_World1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_world1 = /** @type {((inputs?: Projecttype_World1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_World1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_world1(inputs)
	return __en.projecttype_world1(inputs)
});
export { projecttype_world1 as "projectType_world" }
/**
* | output |
* | --- |
* | "Project" |
*
* @param {Projecttype_Project1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_project1 = /** @type {((inputs?: Projecttype_Project1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Project1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_project1(inputs)
	return __en.projecttype_project1(inputs)
});
export { projecttype_project1 as "projectType_project" }
/**
* | output |
* | --- |
* | "User" |
*
* @param {Projecttype_User1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_user1 = /** @type {((inputs?: Projecttype_User1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_User1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_user1(inputs)
	return __en.projecttype_user1(inputs)
});
export { projecttype_user1 as "projectType_user" }
/**
* | output |
* | --- |
* | "Server" |
*
* @param {Projecttype_Server1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_server1 = /** @type {((inputs?: Projecttype_Server1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Server1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_server1(inputs)
	return __en.projecttype_server1(inputs)
});
export { projecttype_server1 as "projectType_server" }
/**
* | output |
* | --- |
* | "Community" |
*
* @param {Projecttype_Community1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_community1 = /** @type {((inputs?: Projecttype_Community1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Community1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_community1(inputs)
	return __en.projecttype_community1(inputs)
});
export { projecttype_community1 as "projectType_community" }
/**
* | output |
* | --- |
* | "Other" |
*
* @param {Projecttype_Other1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const projecttype_other1 = /** @type {((inputs?: Projecttype_Other1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Projecttype_Other1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.projecttype_other1(inputs)
	return __en.projecttype_other1(inputs)
});
export { projecttype_other1 as "projectType_other" }
/**
* | output |
* | --- |
* | "Fabric" |
*
* @param {Loader_FabricInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_fabric = /** @type {((inputs?: Loader_FabricInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_FabricInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_fabric(inputs)
	return __en.loader_fabric(inputs)
});
/**
* | output |
* | --- |
* | "NeoForge" |
*
* @param {Loader_NeoforgeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_neoforge = /** @type {((inputs?: Loader_NeoforgeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_NeoforgeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_neoforge(inputs)
	return __en.loader_neoforge(inputs)
});
/**
* | output |
* | --- |
* | "Forge" |
*
* @param {Loader_ForgeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_forge = /** @type {((inputs?: Loader_ForgeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_ForgeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_forge(inputs)
	return __en.loader_forge(inputs)
});
/**
* | output |
* | --- |
* | "Quilt" |
*
* @param {Loader_QuiltInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_quilt = /** @type {((inputs?: Loader_QuiltInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_QuiltInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_quilt(inputs)
	return __en.loader_quilt(inputs)
});
/**
* | output |
* | --- |
* | "LiteLoader" |
*
* @param {Loader_LiteloaderInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_liteloader = /** @type {((inputs?: Loader_LiteloaderInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_LiteloaderInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_liteloader(inputs)
	return __en.loader_liteloader(inputs)
});
/**
* | output |
* | --- |
* | "Rift" |
*
* @param {Loader_RiftInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_rift = /** @type {((inputs?: Loader_RiftInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_RiftInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_rift(inputs)
	return __en.loader_rift(inputs)
});
/**
* | output |
* | --- |
* | "Ornithe" |
*
* @param {Loader_OrnitheInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_ornithe = /** @type {((inputs?: Loader_OrnitheInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_OrnitheInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_ornithe(inputs)
	return __en.loader_ornithe(inputs)
});
/**
* | output |
* | --- |
* | "NilLoader" |
*
* @param {Loader_NilloaderInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_nilloader = /** @type {((inputs?: Loader_NilloaderInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_NilloaderInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_nilloader(inputs)
	return __en.loader_nilloader(inputs)
});
/**
* | output |
* | --- |
* | "Legacy Fabric" |
*
* @param {Loader_Legacy_FabricInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_legacy_fabric = /** @type {((inputs?: Loader_Legacy_FabricInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_Legacy_FabricInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_legacy_fabric(inputs)
	return __en.loader_legacy_fabric(inputs)
});
/**
* | output |
* | --- |
* | "BTA(Babric)" |
*
* @param {Loader_BtababricInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_btababric = /** @type {((inputs?: Loader_BtababricInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_BtababricInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_btababric(inputs)
	return __en.loader_btababric(inputs)
});
/**
* | output |
* | --- |
* | "Babric" |
*
* @param {Loader_BabricInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_babric = /** @type {((inputs?: Loader_BabricInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_BabricInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_babric(inputs)
	return __en.loader_babric(inputs)
});
/**
* | output |
* | --- |
* | "Risugami's ModLoader" |
*
* @param {Loader_Risugami_S_ModloaderInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_risugami_s_modloader = /** @type {((inputs?: Loader_Risugami_S_ModloaderInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_Risugami_S_ModloaderInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_risugami_s_modloader(inputs)
	return __en.loader_risugami_s_modloader(inputs)
});
/**
* | output |
* | --- |
* | "Java Agent" |
*
* @param {Loader_JavaagentInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_javaagent = /** @type {((inputs?: Loader_JavaagentInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_JavaagentInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_javaagent(inputs)
	return __en.loader_javaagent(inputs)
});
/**
* | output |
* | --- |
* | "Paper" |
*
* @param {Loader_PaperInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_paper = /** @type {((inputs?: Loader_PaperInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_PaperInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_paper(inputs)
	return __en.loader_paper(inputs)
});
/**
* | output |
* | --- |
* | "Purpur" |
*
* @param {Loader_PurpurInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_purpur = /** @type {((inputs?: Loader_PurpurInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_PurpurInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_purpur(inputs)
	return __en.loader_purpur(inputs)
});
/**
* | output |
* | --- |
* | "Spigot" |
*
* @param {Loader_SpigotInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_spigot = /** @type {((inputs?: Loader_SpigotInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_SpigotInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_spigot(inputs)
	return __en.loader_spigot(inputs)
});
/**
* | output |
* | --- |
* | "Bukkit" |
*
* @param {Loader_BukkitInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_bukkit = /** @type {((inputs?: Loader_BukkitInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_BukkitInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_bukkit(inputs)
	return __en.loader_bukkit(inputs)
});
/**
* | output |
* | --- |
* | "Sponge" |
*
* @param {Loader_SpongeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_sponge = /** @type {((inputs?: Loader_SpongeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_SpongeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_sponge(inputs)
	return __en.loader_sponge(inputs)
});
/**
* | output |
* | --- |
* | "Folia" |
*
* @param {Loader_FoliaInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_folia = /** @type {((inputs?: Loader_FoliaInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_FoliaInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_folia(inputs)
	return __en.loader_folia(inputs)
});
/**
* | output |
* | --- |
* | "BungeeCord" |
*
* @param {Loader_BungeecordInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_bungeecord = /** @type {((inputs?: Loader_BungeecordInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_BungeecordInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_bungeecord(inputs)
	return __en.loader_bungeecord(inputs)
});
/**
* | output |
* | --- |
* | "Velocity" |
*
* @param {Loader_VelocityInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_velocity = /** @type {((inputs?: Loader_VelocityInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_VelocityInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_velocity(inputs)
	return __en.loader_velocity(inputs)
});
/**
* | output |
* | --- |
* | "Waterfall" |
*
* @param {Loader_WaterfallInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_waterfall = /** @type {((inputs?: Loader_WaterfallInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_WaterfallInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_waterfall(inputs)
	return __en.loader_waterfall(inputs)
});
/**
* | output |
* | --- |
* | "Geyser Extension" |
*
* @param {Loader_Geyser_ExtensionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_geyser_extension = /** @type {((inputs?: Loader_Geyser_ExtensionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_Geyser_ExtensionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_geyser_extension(inputs)
	return __en.loader_geyser_extension(inputs)
});
/**
* | output |
* | --- |
* | "Datapack" |
*
* @param {Loader_DatapackInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_datapack = /** @type {((inputs?: Loader_DatapackInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_DatapackInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_datapack(inputs)
	return __en.loader_datapack(inputs)
});
/**
* | output |
* | --- |
* | "Resource Pack" |
*
* @param {Loader_ResourcepackInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_resourcepack = /** @type {((inputs?: Loader_ResourcepackInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_ResourcepackInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_resourcepack(inputs)
	return __en.loader_resourcepack(inputs)
});
/**
* | output |
* | --- |
* | "OptiFine" |
*
* @param {Loader_OptifineInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_optifine = /** @type {((inputs?: Loader_OptifineInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_OptifineInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_optifine(inputs)
	return __en.loader_optifine(inputs)
});
/**
* | output |
* | --- |
* | "Iris" |
*
* @param {Loader_IrisInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_iris = /** @type {((inputs?: Loader_IrisInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_IrisInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_iris(inputs)
	return __en.loader_iris(inputs)
});
/**
* | output |
* | --- |
* | "Canvas" |
*
* @param {Loader_CanvasInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_canvas = /** @type {((inputs?: Loader_CanvasInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_CanvasInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_canvas(inputs)
	return __en.loader_canvas(inputs)
});
/**
* | output |
* | --- |
* | "Vanilla" |
*
* @param {Loader_VanillaInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const loader_vanilla = /** @type {((inputs?: Loader_VanillaInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_VanillaInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loader_vanilla(inputs)
	return __en.loader_vanilla(inputs)
});
/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Contentcategory_Mod1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_mod1 = /** @type {((inputs?: Contentcategory_Mod1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Mod1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_mod1(inputs)
	return __en.contentcategory_mod1(inputs)
});
export { contentcategory_mod1 as "contentCategory_mod" }
/**
* | output |
* | --- |
* | "Map" |
*
* @param {Contentcategory_Map1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_map1 = /** @type {((inputs?: Contentcategory_Map1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Map1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_map1(inputs)
	return __en.contentcategory_map1(inputs)
});
export { contentcategory_map1 as "contentCategory_map" }
/**
* | output |
* | --- |
* | "Texture" |
*
* @param {Contentcategory_Texture1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_texture1 = /** @type {((inputs?: Contentcategory_Texture1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Texture1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_texture1(inputs)
	return __en.contentcategory_texture1(inputs)
});
export { contentcategory_texture1 as "contentCategory_texture" }
/**
* | output |
* | --- |
* | "Datapack" |
*
* @param {Contentcategory_Datapack1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_datapack1 = /** @type {((inputs?: Contentcategory_Datapack1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Datapack1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_datapack1(inputs)
	return __en.contentcategory_datapack1(inputs)
});
export { contentcategory_datapack1 as "contentCategory_datapack" }
/**
* | output |
* | --- |
* | "Shader" |
*
* @param {Contentcategory_Shader1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_shader1 = /** @type {((inputs?: Contentcategory_Shader1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Shader1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_shader1(inputs)
	return __en.contentcategory_shader1(inputs)
});
export { contentcategory_shader1 as "contentCategory_shader" }
/**
* | output |
* | --- |
* | "Modpack" |
*
* @param {Contentcategory_Modpack1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_modpack1 = /** @type {((inputs?: Contentcategory_Modpack1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Modpack1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_modpack1(inputs)
	return __en.contentcategory_modpack1(inputs)
});
export { contentcategory_modpack1 as "contentCategory_modpack" }
/**
* | output |
* | --- |
* | "Character" |
*
* @param {Contentcategory_Character1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_character1 = /** @type {((inputs?: Contentcategory_Character1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Character1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_character1(inputs)
	return __en.contentcategory_character1(inputs)
});
export { contentcategory_character1 as "contentCategory_character" }
/**
* | output |
* | --- |
* | "Build" |
*
* @param {Contentcategory_Build1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_build1 = /** @type {((inputs?: Contentcategory_Build1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Build1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_build1(inputs)
	return __en.contentcategory_build1(inputs)
});
export { contentcategory_build1 as "contentCategory_build" }
/**
* | output |
* | --- |
* | "Server" |
*
* @param {Contentcategory_Server1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_server1 = /** @type {((inputs?: Contentcategory_Server1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Server1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_server1(inputs)
	return __en.contentcategory_server1(inputs)
});
export { contentcategory_server1 as "contentCategory_server" }
/**
* | output |
* | --- |
* | "Audio" |
*
* @param {Contentcategory_Audio1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_audio1 = /** @type {((inputs?: Contentcategory_Audio1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Audio1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_audio1(inputs)
	return __en.contentcategory_audio1(inputs)
});
export { contentcategory_audio1 as "contentCategory_audio" }
/**
* | output |
* | --- |
* | "Tool" |
*
* @param {Contentcategory_Tool1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_tool1 = /** @type {((inputs?: Contentcategory_Tool1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Tool1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_tool1(inputs)
	return __en.contentcategory_tool1(inputs)
});
export { contentcategory_tool1 as "contentCategory_tool" }
/**
* | output |
* | --- |
* | "Docs" |
*
* @param {Contentcategory_Docs1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_docs1 = /** @type {((inputs?: Contentcategory_Docs1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_Docs1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_docs1(inputs)
	return __en.contentcategory_docs1(inputs)
});
export { contentcategory_docs1 as "contentCategory_docs" }
/**
* | output |
* | --- |
* | "User" |
*
* @param {Contentcategory_User1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_user1 = /** @type {((inputs?: Contentcategory_User1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_User1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_user1(inputs)
	return __en.contentcategory_user1(inputs)
});
export { contentcategory_user1 as "contentCategory_user" }
/**
* | output |
* | --- |
* | "All" |
*
* @param {Contentcategory_All1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const contentcategory_all1 = /** @type {((inputs?: Contentcategory_All1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Contentcategory_All1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.contentcategory_all1(inputs)
	return __en.contentcategory_all1(inputs)
});
export { contentcategory_all1 as "contentCategory_all" }
/**
* | output |
* | --- |
* | "Adventure" |
*
* @param {Tag_AdventureInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_adventure = /** @type {((inputs?: Tag_AdventureInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_AdventureInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_adventure(inputs)
	return __en.tag_adventure(inputs)
});
/**
* | output |
* | --- |
* | "Cursed" |
*
* @param {Tag_CursedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_cursed = /** @type {((inputs?: Tag_CursedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_CursedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_cursed(inputs)
	return __en.tag_cursed(inputs)
});
/**
* | output |
* | --- |
* | "Decoration" |
*
* @param {Tag_DecorationInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_decoration = /** @type {((inputs?: Tag_DecorationInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_DecorationInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_decoration(inputs)
	return __en.tag_decoration(inputs)
});
/**
* | output |
* | --- |
* | "Economy" |
*
* @param {Tag_EconomyInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_economy = /** @type {((inputs?: Tag_EconomyInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_EconomyInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_economy(inputs)
	return __en.tag_economy(inputs)
});
/**
* | output |
* | --- |
* | "Equipment" |
*
* @param {Tag_EquipmentInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_equipment = /** @type {((inputs?: Tag_EquipmentInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_EquipmentInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_equipment(inputs)
	return __en.tag_equipment(inputs)
});
/**
* | output |
* | --- |
* | "Food" |
*
* @param {Tag_FoodInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_food = /** @type {((inputs?: Tag_FoodInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_FoodInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_food(inputs)
	return __en.tag_food(inputs)
});
/**
* | output |
* | --- |
* | "Game Mechanics" |
*
* @param {Tag_Game_MechanicsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_game_mechanics = /** @type {((inputs?: Tag_Game_MechanicsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Game_MechanicsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_game_mechanics(inputs)
	return __en.tag_game_mechanics(inputs)
});
export { tag_game_mechanics as "tag_game-mechanics" }
/**
* | output |
* | --- |
* | "Library" |
*
* @param {Tag_LibraryInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_library = /** @type {((inputs?: Tag_LibraryInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_LibraryInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_library(inputs)
	return __en.tag_library(inputs)
});
/**
* | output |
* | --- |
* | "Magic" |
*
* @param {Tag_MagicInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_magic = /** @type {((inputs?: Tag_MagicInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MagicInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_magic(inputs)
	return __en.tag_magic(inputs)
});
/**
* | output |
* | --- |
* | "Management" |
*
* @param {Tag_ManagementInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_management = /** @type {((inputs?: Tag_ManagementInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ManagementInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_management(inputs)
	return __en.tag_management(inputs)
});
/**
* | output |
* | --- |
* | "Minigame" |
*
* @param {Tag_MinigameInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_minigame = /** @type {((inputs?: Tag_MinigameInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MinigameInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_minigame(inputs)
	return __en.tag_minigame(inputs)
});
/**
* | output |
* | --- |
* | "Mobs" |
*
* @param {Tag_MobsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_mobs = /** @type {((inputs?: Tag_MobsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MobsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_mobs(inputs)
	return __en.tag_mobs(inputs)
});
/**
* | output |
* | --- |
* | "Optimization" |
*
* @param {Tag_OptimizationInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_optimization = /** @type {((inputs?: Tag_OptimizationInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_OptimizationInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_optimization(inputs)
	return __en.tag_optimization(inputs)
});
/**
* | output |
* | --- |
* | "Social" |
*
* @param {Tag_SocialInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_social = /** @type {((inputs?: Tag_SocialInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_SocialInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_social(inputs)
	return __en.tag_social(inputs)
});
/**
* | output |
* | --- |
* | "Storage" |
*
* @param {Tag_StorageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_storage = /** @type {((inputs?: Tag_StorageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_StorageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_storage(inputs)
	return __en.tag_storage(inputs)
});
/**
* | output |
* | --- |
* | "Technology" |
*
* @param {Tag_TechnologyInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_technology = /** @type {((inputs?: Tag_TechnologyInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_TechnologyInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_technology(inputs)
	return __en.tag_technology(inputs)
});
/**
* | output |
* | --- |
* | "Transportation" |
*
* @param {Tag_TransportationInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_transportation = /** @type {((inputs?: Tag_TransportationInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_TransportationInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_transportation(inputs)
	return __en.tag_transportation(inputs)
});
/**
* | output |
* | --- |
* | "Utility" |
*
* @param {Tag_UtilityInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_utility = /** @type {((inputs?: Tag_UtilityInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_UtilityInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_utility(inputs)
	return __en.tag_utility(inputs)
});
/**
* | output |
* | --- |
* | "World Generation" |
*
* @param {Tag_World_GenInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_world_gen = /** @type {((inputs?: Tag_World_GenInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_World_GenInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_world_gen(inputs)
	return __en.tag_world_gen(inputs)
});
export { tag_world_gen as "tag_world-gen" }
/**
* | output |
* | --- |
* | "Combat" |
*
* @param {Tag_CombatInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_combat = /** @type {((inputs?: Tag_CombatInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_CombatInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_combat(inputs)
	return __en.tag_combat(inputs)
});
/**
* | output |
* | --- |
* | "Modded" |
*
* @param {Tag_ModdedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_modded = /** @type {((inputs?: Tag_ModdedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ModdedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_modded(inputs)
	return __en.tag_modded(inputs)
});
/**
* | output |
* | --- |
* | "Realistic" |
*
* @param {Tag_RealisticInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_realistic = /** @type {((inputs?: Tag_RealisticInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_RealisticInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_realistic(inputs)
	return __en.tag_realistic(inputs)
});
/**
* | output |
* | --- |
* | "Simplistic" |
*
* @param {Tag_SimplisticInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_simplistic = /** @type {((inputs?: Tag_SimplisticInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_SimplisticInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_simplistic(inputs)
	return __en.tag_simplistic(inputs)
});
/**
* | output |
* | --- |
* | "Themed" |
*
* @param {Tag_ThemedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_themed = /** @type {((inputs?: Tag_ThemedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ThemedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_themed(inputs)
	return __en.tag_themed(inputs)
});
/**
* | output |
* | --- |
* | "Tweaks" |
*
* @param {Tag_TweaksInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_tweaks = /** @type {((inputs?: Tag_TweaksInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_TweaksInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_tweaks(inputs)
	return __en.tag_tweaks(inputs)
});
/**
* | output |
* | --- |
* | "Vanilla-like" |
*
* @param {Tag_Vanilla_LikeInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_vanilla_like = /** @type {((inputs?: Tag_Vanilla_LikeInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Vanilla_LikeInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_vanilla_like(inputs)
	return __en.tag_vanilla_like(inputs)
});
export { tag_vanilla_like as "tag_vanilla-like" }
/**
* | output |
* | --- |
* | "Audio" |
*
* @param {Tag_AudioInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_audio = /** @type {((inputs?: Tag_AudioInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_AudioInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_audio(inputs)
	return __en.tag_audio(inputs)
});
/**
* | output |
* | --- |
* | "Blocks" |
*
* @param {Tag_BlocksInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_blocks = /** @type {((inputs?: Tag_BlocksInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_BlocksInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_blocks(inputs)
	return __en.tag_blocks(inputs)
});
/**
* | output |
* | --- |
* | "Core Shaders" |
*
* @param {Tag_Core_ShadersInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_core_shaders = /** @type {((inputs?: Tag_Core_ShadersInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Core_ShadersInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_core_shaders(inputs)
	return __en.tag_core_shaders(inputs)
});
export { tag_core_shaders as "tag_core-shaders" }
/**
* | output |
* | --- |
* | "Entities" |
*
* @param {Tag_EntitiesInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_entities = /** @type {((inputs?: Tag_EntitiesInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_EntitiesInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_entities(inputs)
	return __en.tag_entities(inputs)
});
/**
* | output |
* | --- |
* | "Environment" |
*
* @param {Tag_EnvironmentInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_environment = /** @type {((inputs?: Tag_EnvironmentInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_EnvironmentInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_environment(inputs)
	return __en.tag_environment(inputs)
});
/**
* | output |
* | --- |
* | "Fonts" |
*
* @param {Tag_FontsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_fonts = /** @type {((inputs?: Tag_FontsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_FontsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_fonts(inputs)
	return __en.tag_fonts(inputs)
});
/**
* | output |
* | --- |
* | "GUI" |
*
* @param {Tag_GuiInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_gui = /** @type {((inputs?: Tag_GuiInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_GuiInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_gui(inputs)
	return __en.tag_gui(inputs)
});
/**
* | output |
* | --- |
* | "Items" |
*
* @param {Tag_ItemsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_items = /** @type {((inputs?: Tag_ItemsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ItemsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_items(inputs)
	return __en.tag_items(inputs)
});
/**
* | output |
* | --- |
* | "Language" |
*
* @param {Tag_LanguageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_language = /** @type {((inputs?: Tag_LanguageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_LanguageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_language(inputs)
	return __en.tag_language(inputs)
});
/**
* | output |
* | --- |
* | "Models" |
*
* @param {Tag_ModelsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_models = /** @type {((inputs?: Tag_ModelsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ModelsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_models(inputs)
	return __en.tag_models(inputs)
});
/**
* | output |
* | --- |
* | "8x and below" |
*
* @param {Tag_8x_Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_8x_ = /** @type {((inputs?: Tag_8x_Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_8x_Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_8x_(inputs)
	return __en.tag_8x_(inputs)
});
export { tag_8x_ as "tag_8x-" }
/**
* | output |
* | --- |
* | "16x" |
*
* @param {Tag_16xInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_16x = /** @type {((inputs?: Tag_16xInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_16xInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_16x(inputs)
	return __en.tag_16x(inputs)
});
/**
* | output |
* | --- |
* | "32x" |
*
* @param {Tag_32xInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_32x = /** @type {((inputs?: Tag_32xInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_32xInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_32x(inputs)
	return __en.tag_32x(inputs)
});
/**
* | output |
* | --- |
* | "64x" |
*
* @param {Tag_64xInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_64x = /** @type {((inputs?: Tag_64xInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_64xInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_64x(inputs)
	return __en.tag_64x(inputs)
});
/**
* | output |
* | --- |
* | "128x" |
*
* @param {Tag_128xInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_128x = /** @type {((inputs?: Tag_128xInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_128xInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_128x(inputs)
	return __en.tag_128x(inputs)
});
/**
* | output |
* | --- |
* | "256x" |
*
* @param {Tag_256xInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_256x = /** @type {((inputs?: Tag_256xInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_256xInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_256x(inputs)
	return __en.tag_256x(inputs)
});
/**
* | output |
* | --- |
* | "512x and above" |
*
* @param {Tag_512x_Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_512x_ = /** @type {((inputs?: Tag_512x_Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_512x_Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_512x_(inputs)
	return __en.tag_512x_(inputs)
});
export { tag_512x_ as "tag_512x+" }
/**
* | output |
* | --- |
* | "Cartoon" |
*
* @param {Tag_CartoonInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_cartoon = /** @type {((inputs?: Tag_CartoonInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_CartoonInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_cartoon(inputs)
	return __en.tag_cartoon(inputs)
});
/**
* | output |
* | --- |
* | "Fantasy" |
*
* @param {Tag_FantasyInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_fantasy = /** @type {((inputs?: Tag_FantasyInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_FantasyInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_fantasy(inputs)
	return __en.tag_fantasy(inputs)
});
/**
* | output |
* | --- |
* | "Semi-realistic" |
*
* @param {Tag_Semi_RealisticInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_semi_realistic = /** @type {((inputs?: Tag_Semi_RealisticInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Semi_RealisticInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_semi_realistic(inputs)
	return __en.tag_semi_realistic(inputs)
});
export { tag_semi_realistic as "tag_semi-realistic" }
/**
* | output |
* | --- |
* | "Atmosphere" |
*
* @param {Tag_AtmosphereInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_atmosphere = /** @type {((inputs?: Tag_AtmosphereInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_AtmosphereInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_atmosphere(inputs)
	return __en.tag_atmosphere(inputs)
});
/**
* | output |
* | --- |
* | "Bloom" |
*
* @param {Tag_BloomInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_bloom = /** @type {((inputs?: Tag_BloomInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_BloomInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_bloom(inputs)
	return __en.tag_bloom(inputs)
});
/**
* | output |
* | --- |
* | "Colored Lighting" |
*
* @param {Tag_Colored_LightingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_colored_lighting = /** @type {((inputs?: Tag_Colored_LightingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Colored_LightingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_colored_lighting(inputs)
	return __en.tag_colored_lighting(inputs)
});
export { tag_colored_lighting as "tag_colored-lighting" }
/**
* | output |
* | --- |
* | "Foliage" |
*
* @param {Tag_FoliageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_foliage = /** @type {((inputs?: Tag_FoliageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_FoliageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_foliage(inputs)
	return __en.tag_foliage(inputs)
});
/**
* | output |
* | --- |
* | "Path Tracing" |
*
* @param {Tag_Path_TracingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_path_tracing = /** @type {((inputs?: Tag_Path_TracingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Path_TracingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_path_tracing(inputs)
	return __en.tag_path_tracing(inputs)
});
export { tag_path_tracing as "tag_path-tracing" }
/**
* | output |
* | --- |
* | "PBR" |
*
* @param {Tag_PbrInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_pbr = /** @type {((inputs?: Tag_PbrInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_PbrInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_pbr(inputs)
	return __en.tag_pbr(inputs)
});
/**
* | output |
* | --- |
* | "Reflections" |
*
* @param {Tag_ReflectionsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_reflections = /** @type {((inputs?: Tag_ReflectionsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ReflectionsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_reflections(inputs)
	return __en.tag_reflections(inputs)
});
/**
* | output |
* | --- |
* | "Shadows" |
*
* @param {Tag_ShadowsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_shadows = /** @type {((inputs?: Tag_ShadowsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ShadowsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_shadows(inputs)
	return __en.tag_shadows(inputs)
});
/**
* | output |
* | --- |
* | "High" |
*
* @param {Tag_HighInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_high = /** @type {((inputs?: Tag_HighInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_HighInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_high(inputs)
	return __en.tag_high(inputs)
});
/**
* | output |
* | --- |
* | "Low" |
*
* @param {Tag_LowInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_low = /** @type {((inputs?: Tag_LowInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_LowInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_low(inputs)
	return __en.tag_low(inputs)
});
/**
* | output |
* | --- |
* | "Medium" |
*
* @param {Tag_MediumInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_medium = /** @type {((inputs?: Tag_MediumInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MediumInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_medium(inputs)
	return __en.tag_medium(inputs)
});
/**
* | output |
* | --- |
* | "Potato" |
*
* @param {Tag_PotatoInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_potato = /** @type {((inputs?: Tag_PotatoInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_PotatoInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_potato(inputs)
	return __en.tag_potato(inputs)
});
/**
* | output |
* | --- |
* | "Screenshot" |
*
* @param {Tag_ScreenshotInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_screenshot = /** @type {((inputs?: Tag_ScreenshotInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ScreenshotInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_screenshot(inputs)
	return __en.tag_screenshot(inputs)
});
/**
* | output |
* | --- |
* | "Challenging" |
*
* @param {Tag_ChallengingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_challenging = /** @type {((inputs?: Tag_ChallengingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ChallengingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_challenging(inputs)
	return __en.tag_challenging(inputs)
});
/**
* | output |
* | --- |
* | "Kitchen Sink" |
*
* @param {Tag_Kitchen_SinkInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const tag_kitchen_sink = /** @type {((inputs?: Tag_Kitchen_SinkInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Kitchen_SinkInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_kitchen_sink(inputs)
	return __en.tag_kitchen_sink(inputs)
});
export { tag_kitchen_sink as "tag_kitchen-sink" }
/**
* | output |
* | --- |
* | "Lightweight" |
*
* @param {Tag_LightweightInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_lightweight = /** @type {((inputs?: Tag_LightweightInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_LightweightInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_lightweight(inputs)
	return __en.tag_lightweight(inputs)
});
/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Tag_MultiplayerInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_multiplayer = /** @type {((inputs?: Tag_MultiplayerInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MultiplayerInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_multiplayer(inputs)
	return __en.tag_multiplayer(inputs)
});
/**
* | output |
* | --- |
* | "Quests" |
*
* @param {Tag_QuestsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_quests = /** @type {((inputs?: Tag_QuestsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_QuestsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.tag_quests(inputs)
	return __en.tag_quests(inputs)
});
/**
* | output |
* | --- |
* | "Performance Impact" |
*
* @param {Performance_ImpactInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const performance_impact = /** @type {((inputs?: Performance_ImpactInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Performance_ImpactInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.performance_impact(inputs)
	return __en.performance_impact(inputs)
});
/**
* | output |
* | --- |
* | "Features" |
*
* @param {FeaturesInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const features = /** @type {((inputs?: FeaturesInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FeaturesInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.features(inputs)
	return __en.features(inputs)
});
/**
* | output |
* | --- |
* | "Resolutions" |
*
* @param {ResolutionsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const resolutions = /** @type {((inputs?: ResolutionsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ResolutionsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.resolutions(inputs)
	return __en.resolutions(inputs)
});
/**
* | output |
* | --- |
* | "Categories" |
*
* @param {CategoriesInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const categories = /** @type {((inputs?: CategoriesInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CategoriesInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.categories(inputs)
	return __en.categories(inputs)
});
/**
* | output |
* | --- |
* | "License" |
*
* @param {LicenseInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const license = /** @type {((inputs?: LicenseInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LicenseInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.license(inputs)
	return __en.license(inputs)
});
/**
* | output |
* | --- |
* | "Open Source" |
*
* @param {Opensource1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const opensource1 = /** @type {((inputs?: Opensource1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Opensource1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.opensource1(inputs)
	return __en.opensource1(inputs)
});
export { opensource1 as "openSource" }
/**
* | output |
* | --- |
* | "Client" |
*
* @param {Environment_ClientInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_client = /** @type {((inputs?: Environment_ClientInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_ClientInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_client(inputs)
	return __en.environment_client(inputs)
});
/**
* | output |
* | --- |
* | "Server" |
*
* @param {Environment_ServerInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_server = /** @type {((inputs?: Environment_ServerInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_ServerInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_server(inputs)
	return __en.environment_server(inputs)
});
/**
* | output |
* | --- |
* | "Client and Server" |
*
* @param {Environment_Client_And_ServerInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_client_and_server = /** @type {((inputs?: Environment_Client_And_ServerInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_Client_And_ServerInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_client_and_server(inputs)
	return __en.environment_client_and_server(inputs)
});
/**
* | output |
* | --- |
* | "Client (Server Optional)" |
*
* @param {Environment_Client_Server_OptionalInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_client_server_optional = /** @type {((inputs?: Environment_Client_Server_OptionalInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_Client_Server_OptionalInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_client_server_optional(inputs)
	return __en.environment_client_server_optional(inputs)
});
/**
* | output |
* | --- |
* | "Server (Client Optional)" |
*
* @param {Environment_Server_Client_OptionalInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_server_client_optional = /** @type {((inputs?: Environment_Server_Client_OptionalInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_Server_Client_OptionalInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_server_client_optional(inputs)
	return __en.environment_server_client_optional(inputs)
});
/**
* | output |
* | --- |
* | "Client and Server Optional" |
*
* @param {Environment_Client_Optional_Server_OptionalInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_client_optional_server_optional = /** @type {((inputs?: Environment_Client_Optional_Server_OptionalInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_Client_Optional_Server_OptionalInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_client_optional_server_optional(inputs)
	return __en.environment_client_optional_server_optional(inputs)
});
/**
* | output |
* | --- |
* | "Client or Server" |
*
* @param {Environment_Client_Or_ServerInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_client_or_server = /** @type {((inputs?: Environment_Client_Or_ServerInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_Client_Or_ServerInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_client_or_server(inputs)
	return __en.environment_client_or_server(inputs)
});
/**
* | output |
* | --- |
* | "Dedicated Server" |
*
* @param {Environment_Dedicated_ServerInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const environment_dedicated_server = /** @type {((inputs?: Environment_Dedicated_ServerInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Environment_Dedicated_ServerInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.environment_dedicated_server(inputs)
	return __en.environment_dedicated_server(inputs)
});
/**
* | output |
* | --- |
* | "Release" |
*
* @param {Versiontype_Release1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_release1 = /** @type {((inputs?: Versiontype_Release1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Release1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_release1(inputs)
	return __en.versiontype_release1(inputs)
});
export { versiontype_release1 as "versionType_release" }
/**
* | output |
* | --- |
* | "Beta" |
*
* @param {Versiontype_Beta1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_beta1 = /** @type {((inputs?: Versiontype_Beta1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Beta1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_beta1(inputs)
	return __en.versiontype_beta1(inputs)
});
export { versiontype_beta1 as "versionType_beta" }
/**
* | output |
* | --- |
* | "Alpha" |
*
* @param {Versiontype_Alpha1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_alpha1 = /** @type {((inputs?: Versiontype_Alpha1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Alpha1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_alpha1(inputs)
	return __en.versiontype_alpha1(inputs)
});
export { versiontype_alpha1 as "versionType_alpha" }
/**
* | output |
* | --- |
* | "Stable" |
*
* @param {Versiontype_Stable1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_stable1 = /** @type {((inputs?: Versiontype_Stable1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Stable1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_stable1(inputs)
	return __en.versiontype_stable1(inputs)
});
export { versiontype_stable1 as "versionType_stable" }
/**
* | output |
* | --- |
* | "Snapshot" |
*
* @param {Versiontype_Snapshot1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_snapshot1 = /** @type {((inputs?: Versiontype_Snapshot1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Snapshot1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_snapshot1(inputs)
	return __en.versiontype_snapshot1(inputs)
});
export { versiontype_snapshot1 as "versionType_snapshot" }
/**
* | output |
* | --- |
* | "Old Beta" |
*
* @param {Versiontype_Old_Beta1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_old_beta1 = /** @type {((inputs?: Versiontype_Old_Beta1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Old_Beta1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_old_beta1(inputs)
	return __en.versiontype_old_beta1(inputs)
});
export { versiontype_old_beta1 as "versionType_old_beta" }
/**
* | output |
* | --- |
* | "Old Alpha" |
*
* @param {Versiontype_Old_Alpha1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const versiontype_old_alpha1 = /** @type {((inputs?: Versiontype_Old_Alpha1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Versiontype_Old_Alpha1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.versiontype_old_alpha1(inputs)
	return __en.versiontype_old_alpha1(inputs)
});
export { versiontype_old_alpha1 as "versionType_old_alpha" }
/**
* | output |
* | --- |
* | "Pending" |
*
* @param {Status_PendingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_pending = /** @type {((inputs?: Status_PendingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_PendingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_pending(inputs)
	return __en.status_pending(inputs)
});
/**
* | output |
* | --- |
* | "Approved" |
*
* @param {Status_ApprovedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_approved = /** @type {((inputs?: Status_ApprovedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_ApprovedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_approved(inputs)
	return __en.status_approved(inputs)
});
/**
* | output |
* | --- |
* | "Rejected" |
*
* @param {Status_RejectedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_rejected = /** @type {((inputs?: Status_RejectedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_RejectedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_rejected(inputs)
	return __en.status_rejected(inputs)
});
/**
* | output |
* | --- |
* | "Active" |
*
* @param {Status_ActiveInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_active = /** @type {((inputs?: Status_ActiveInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_ActiveInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_active(inputs)
	return __en.status_active(inputs)
});
/**
* | output |
* | --- |
* | "Expired" |
*
* @param {Status_ExpiredInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_expired = /** @type {((inputs?: Status_ExpiredInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_ExpiredInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_expired(inputs)
	return __en.status_expired(inputs)
});
/**
* | output |
* | --- |
* | "Revoked" |
*
* @param {Status_RevokedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_revoked = /** @type {((inputs?: Status_RevokedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_RevokedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_revoked(inputs)
	return __en.status_revoked(inputs)
});
/**
* | output |
* | --- |
* | "Verify" |
*
* @param {Identityrequestaction_Create2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identityrequestaction_create2 = /** @type {((inputs?: Identityrequestaction_Create2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identityrequestaction_Create2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identityrequestaction_create2(inputs)
	return __en.identityrequestaction_create2(inputs)
});
export { identityrequestaction_create2 as "identityRequestAction_create" }
/**
* | output |
* | --- |
* | "Update" |
*
* @param {Identityrequestaction_Update2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identityrequestaction_update2 = /** @type {((inputs?: Identityrequestaction_Update2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identityrequestaction_Update2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identityrequestaction_update2(inputs)
	return __en.identityrequestaction_update2(inputs)
});
export { identityrequestaction_update2 as "identityRequestAction_update" }
/**
* | output |
* | --- |
* | "Appreciator" |
*
* @param {Identitytype_Appreciator1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identitytype_appreciator1 = /** @type {((inputs?: Identitytype_Appreciator1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identitytype_Appreciator1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identitytype_appreciator1(inputs)
	return __en.identitytype_appreciator1(inputs)
});
export { identitytype_appreciator1 as "identityType_appreciator" }
/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Identitytype_Creator1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identitytype_creator1 = /** @type {((inputs?: Identitytype_Creator1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identitytype_Creator1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identitytype_creator1(inputs)
	return __en.identitytype_creator1(inputs)
});
export { identitytype_creator1 as "identityType_creator" }
/**
* | output |
* | --- |
* | "Producer" |
*
* @param {Identitytype_Producer1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identitytype_producer1 = /** @type {((inputs?: Identitytype_Producer1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identitytype_Producer1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identitytype_producer1(inputs)
	return __en.identitytype_producer1(inputs)
});
export { identitytype_producer1 as "identityType_producer" }
/**
* | output |
* | --- |
* | "Builder" |
*
* @param {Identitytype_Builder1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identitytype_builder1 = /** @type {((inputs?: Identitytype_Builder1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identitytype_Builder1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identitytype_builder1(inputs)
	return __en.identitytype_builder1(inputs)
});
export { identitytype_builder1 as "identityType_builder" }
/**
* | output |
* | --- |
* | "Investor" |
*
* @param {Identitytype_Investor1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const identitytype_investor1 = /** @type {((inputs?: Identitytype_Investor1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Identitytype_Investor1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.identitytype_investor1(inputs)
	return __en.identitytype_investor1(inputs)
});
export { identitytype_investor1 as "identityType_investor" }
/**
* | output |
* | --- |
* | "Appreciation" |
*
* @param {Teamidentity_Appreciator1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const teamidentity_appreciator1 = /** @type {((inputs?: Teamidentity_Appreciator1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Teamidentity_Appreciator1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.teamidentity_appreciator1(inputs)
	return __en.teamidentity_appreciator1(inputs)
});
export { teamidentity_appreciator1 as "teamIdentity_appreciator" }
/**
* | output |
* | --- |
* | "Creation" |
*
* @param {Teamidentity_Creator1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const teamidentity_creator1 = /** @type {((inputs?: Teamidentity_Creator1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Teamidentity_Creator1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.teamidentity_creator1(inputs)
	return __en.teamidentity_creator1(inputs)
});
export { teamidentity_creator1 as "teamIdentity_creator" }
/**
* | output |
* | --- |
* | "Production" |
*
* @param {Teamidentity_Producer1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const teamidentity_producer1 = /** @type {((inputs?: Teamidentity_Producer1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Teamidentity_Producer1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.teamidentity_producer1(inputs)
	return __en.teamidentity_producer1(inputs)
});
export { teamidentity_producer1 as "teamIdentity_producer" }
/**
* | output |
* | --- |
* | "Investment" |
*
* @param {Teamidentity_Investor1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const teamidentity_investor1 = /** @type {((inputs?: Teamidentity_Investor1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Teamidentity_Investor1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.teamidentity_investor1(inputs)
	return __en.teamidentity_investor1(inputs)
});
export { teamidentity_investor1 as "teamIdentity_investor" }
/**
* | output |
* | --- |
* | "Owner" |
*
* @param {Team_OwnerInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const team_owner = /** @type {((inputs?: Team_OwnerInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_OwnerInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.team_owner(inputs)
	return __en.team_owner(inputs)
});
/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Team_AdminInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const team_admin = /** @type {((inputs?: Team_AdminInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_AdminInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.team_admin(inputs)
	return __en.team_admin(inputs)
});
/**
* | output |
* | --- |
* | "Member" |
*
* @param {Team_MemberInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const team_member = /** @type {((inputs?: Team_MemberInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Team_MemberInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.team_member(inputs)
	return __en.team_member(inputs)
});
/**
* | output |
* | --- |
* | "The framework for next generation AI applications" |
*
* @param {Framework_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const framework_description = /** @type {((inputs?: Framework_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Framework_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.framework_description(inputs)
	return __en.framework_description(inputs)
});
/**
* | output |
* | --- |
* | "Full-stack framework powered by TanStack Router for React and Solid. Build modern applications with server functions, streaming, and type safety." |
*
* @param {Full_Stack_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const full_stack_description = /** @type {((inputs?: Full_Stack_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Full_Stack_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.full_stack_description(inputs)
	return __en.full_stack_description(inputs)
});
/**
* | output |
* | --- |
* | "Documentation" |
*
* @param {Documentation_ButtonInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const documentation_button = /** @type {((inputs?: Documentation_ButtonInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Documentation_ButtonInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.documentation_button(inputs)
	return __en.documentation_button(inputs)
});
/**
* | output |
* | --- |
* | "Begin your TanStack Start journey by editing" |
*
* @param {Edit_InstructionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_instruction = /** @type {((inputs?: Edit_InstructionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Edit_InstructionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.edit_instruction(inputs)
	return __en.edit_instruction(inputs)
});
/**
* | output |
* | --- |
* | "Powerful Server Functions" |
*
* @param {Powerful_Server_Functions_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const powerful_server_functions_title = /** @type {((inputs?: Powerful_Server_Functions_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Powerful_Server_Functions_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.powerful_server_functions_title(inputs)
	return __en.powerful_server_functions_title(inputs)
});
/**
* | output |
* | --- |
* | "Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple." |
*
* @param {Powerful_Server_Functions_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const powerful_server_functions_description = /** @type {((inputs?: Powerful_Server_Functions_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Powerful_Server_Functions_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.powerful_server_functions_description(inputs)
	return __en.powerful_server_functions_description(inputs)
});
/**
* | output |
* | --- |
* | "Flexible Server Side Rendering" |
*
* @param {Flexible_Server_Side_Rendering_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const flexible_server_side_rendering_title = /** @type {((inputs?: Flexible_Server_Side_Rendering_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Flexible_Server_Side_Rendering_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.flexible_server_side_rendering_title(inputs)
	return __en.flexible_server_side_rendering_title(inputs)
});
/**
* | output |
* | --- |
* | "Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where." |
*
* @param {Flexible_Server_Side_Rendering_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const flexible_server_side_rendering_description = /** @type {((inputs?: Flexible_Server_Side_Rendering_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Flexible_Server_Side_Rendering_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.flexible_server_side_rendering_description(inputs)
	return __en.flexible_server_side_rendering_description(inputs)
});
/**
* | output |
* | --- |
* | "API Routes" |
*
* @param {Api_Routes_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const api_routes_title = /** @type {((inputs?: Api_Routes_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Routes_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.api_routes_title(inputs)
	return __en.api_routes_title(inputs)
});
/**
* | output |
* | --- |
* | "Build type-safe API endpoints alongside your application. No separate backend needed." |
*
* @param {Api_Routes_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const api_routes_description = /** @type {((inputs?: Api_Routes_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Routes_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.api_routes_description(inputs)
	return __en.api_routes_description(inputs)
});
/**
* | output |
* | --- |
* | "Strongly Typed Everything" |
*
* @param {Strongly_Typed_Everything_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const strongly_typed_everything_title = /** @type {((inputs?: Strongly_Typed_Everything_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Strongly_Typed_Everything_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.strongly_typed_everything_title(inputs)
	return __en.strongly_typed_everything_title(inputs)
});
/**
* | output |
* | --- |
* | "End-to-end type safety from server to client. Catch errors before they reach production." |
*
* @param {Strongly_Typed_Everything_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const strongly_typed_everything_description = /** @type {((inputs?: Strongly_Typed_Everything_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Strongly_Typed_Everything_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.strongly_typed_everything_description(inputs)
	return __en.strongly_typed_everything_description(inputs)
});
/**
* | output |
* | --- |
* | "Full Streaming Support" |
*
* @param {Full_Streaming_Support_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const full_streaming_support_title = /** @type {((inputs?: Full_Streaming_Support_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Full_Streaming_Support_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.full_streaming_support_title(inputs)
	return __en.full_streaming_support_title(inputs)
});
/**
* | output |
* | --- |
* | "Stream data from server to client progressively. Perfect for AI applications and real-time updates." |
*
* @param {Full_Streaming_Support_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const full_streaming_support_description = /** @type {((inputs?: Full_Streaming_Support_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Full_Streaming_Support_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.full_streaming_support_description(inputs)
	return __en.full_streaming_support_description(inputs)
});
/**
* | output |
* | --- |
* | "Next Generation Ready" |
*
* @param {Next_Generation_Ready_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const next_generation_ready_title = /** @type {((inputs?: Next_Generation_Ready_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Next_Generation_Ready_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.next_generation_ready_title(inputs)
	return __en.next_generation_ready_title(inputs)
});
/**
* | output |
* | --- |
* | "Built from the ground up for modern web applications. Deploy anywhere JavaScript runs." |
*
* @param {Next_Generation_Ready_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const next_generation_ready_description = /** @type {((inputs?: Next_Generation_Ready_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Next_Generation_Ready_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.next_generation_ready_description(inputs)
	return __en.next_generation_ready_description(inputs)
});
/**
* | output |
* | --- |
* | "Back" |
*
* @param {Common_BackInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const common_back = /** @type {((inputs?: Common_BackInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_BackInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.common_back(inputs)
	return __en.common_back(inputs)
});
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Common_CancelInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const common_cancel = /** @type {((inputs?: Common_CancelInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_CancelInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.common_cancel(inputs)
	return __en.common_cancel(inputs)
});
/**
* | output |
* | --- |
* | "Close" |
*
* @param {Common_CloseInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const common_close = /** @type {((inputs?: Common_CloseInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_CloseInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.common_close(inputs)
	return __en.common_close(inputs)
});
/**
* | output |
* | --- |
* | "loading" |
*
* @param {Common_LoadingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const common_loading = /** @type {((inputs?: Common_LoadingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_LoadingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.common_loading(inputs)
	return __en.common_loading(inputs)
});
/**
* | output |
* | --- |
* | "." |
*
* @param {Common_Sentenceend1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const common_sentenceend1 = /** @type {((inputs?: Common_Sentenceend1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Sentenceend1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.common_sentenceend1(inputs)
	return __en.common_sentenceend1(inputs)
});
export { common_sentenceend1 as "common_sentenceEnd" }
/**
* | output |
* | --- |
* | "Waiting" |
*
* @param {Common_WaitingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const common_waiting = /** @type {((inputs?: Common_WaitingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_WaitingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.common_waiting(inputs)
	return __en.common_waiting(inputs)
});
/**
* | output |
* | --- |
* | "Create new task" |
*
* @param {Home_Createtitle1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_createtitle1 = /** @type {((inputs?: Home_Createtitle1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Createtitle1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_createtitle1(inputs)
	return __en.home_createtitle1(inputs)
});
export { home_createtitle1 as "home_createTitle" }
/**
* | output |
* | --- |
* | "YouTube URL (English -> Chinese)" |
*
* @param {Home_Youtubelabel1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_youtubelabel1 = /** @type {((inputs?: Home_Youtubelabel1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Youtubelabel1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_youtubelabel1(inputs)
	return __en.home_youtubelabel1(inputs)
});
export { home_youtubelabel1 as "home_youtubeLabel" }
/**
* | output |
* | --- |
* | "Bilibili URL (Chinese -> English)" |
*
* @param {Home_Bilibililabel1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_bilibililabel1 = /** @type {((inputs?: Home_Bilibililabel1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Bilibililabel1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_bilibililabel1(inputs)
	return __en.home_bilibililabel1(inputs)
});
export { home_bilibililabel1 as "home_bilibiliLabel" }
/**
* | output |
* | --- |
* | "Local video file" |
*
* @param {Home_Localvideolabel2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_localvideolabel2 = /** @type {((inputs?: Home_Localvideolabel2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Localvideolabel2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_localvideolabel2(inputs)
	return __en.home_localvideolabel2(inputs)
});
export { home_localvideolabel2 as "home_localVideoLabel" }
/**
* | output |
* | --- |
* | "Translation direction" |
*
* @param {Home_Localdirectionlabel2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_localdirectionlabel2 = /** @type {((inputs?: Home_Localdirectionlabel2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Localdirectionlabel2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_localdirectionlabel2(inputs)
	return __en.home_localdirectionlabel2(inputs)
});
export { home_localdirectionlabel2 as "home_localDirectionLabel" }
/**
* | output |
* | --- |
* | "English -> Chinese" |
*
* @param {Home_Localenzh2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_localenzh2 = /** @type {((inputs?: Home_Localenzh2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Localenzh2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_localenzh2(inputs)
	return __en.home_localenzh2(inputs)
});
export { home_localenzh2 as "home_localEnZh" }
/**
* | output |
* | --- |
* | "Chinese -> English" |
*
* @param {Home_Localzhen2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_localzhen2 = /** @type {((inputs?: Home_Localzhen2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Localzhen2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_localzhen2(inputs)
	return __en.home_localzhen2(inputs)
});
export { home_localzhen2 as "home_localZhEn" }
/**
* | output |
* | --- |
* | "Submitting" |
*
* @param {Home_SubmittingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const home_submitting = /** @type {((inputs?: Home_SubmittingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_SubmittingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_submitting(inputs)
	return __en.home_submitting(inputs)
});
/**
* | output |
* | --- |
* | "Create task" |
*
* @param {Home_Createtask1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_createtask1 = /** @type {((inputs?: Home_Createtask1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Createtask1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_createtask1(inputs)
	return __en.home_createtask1(inputs)
});
export { home_createtask1 as "home_createTask" }
/**
* | output |
* | --- |
* | "Task history" |
*
* @param {Home_Taskhistory1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_taskhistory1 = /** @type {((inputs?: Home_Taskhistory1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Taskhistory1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_taskhistory1(inputs)
	return __en.home_taskhistory1(inputs)
});
export { home_taskhistory1 as "home_taskHistory" }
/**
* | output |
* | --- |
* | "No tasks yet. Submit a URL or upload a local video above to start." |
*
* @param {Home_EmptyInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const home_empty = /** @type {((inputs?: Home_EmptyInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_EmptyInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_empty(inputs)
	return __en.home_empty(inputs)
});
/**
* | output |
* | --- |
* | "Failed to load tasks" |
*
* @param {Home_Loaderror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_loaderror1 = /** @type {((inputs?: Home_Loaderror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Loaderror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_loaderror1(inputs)
	return __en.home_loaderror1(inputs)
});
export { home_loaderror1 as "home_loadError" }
/**
* | output |
* | --- |
* | "Failed to create task" |
*
* @param {Home_Createerror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const home_createerror1 = /** @type {((inputs?: Home_Createerror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Createerror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.home_createerror1(inputs)
	return __en.home_createerror1(inputs)
});
export { home_createerror1 as "home_createError" }
/**
* | output |
* | --- |
* | "Task overview" |
*
* @param {Task_OverviewInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_overview = /** @type {((inputs?: Task_OverviewInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_OverviewInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_overview(inputs)
	return __en.task_overview(inputs)
});
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Task_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_title = /** @type {((inputs?: Task_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_title(inputs)
	return __en.task_title(inputs)
});
/**
* | output |
* | --- |
* | "Task ID" |
*
* @param {Task_Taskid1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_taskid1 = /** @type {((inputs?: Task_Taskid1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Taskid1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_taskid1(inputs)
	return __en.task_taskid1(inputs)
});
export { task_taskid1 as "task_taskId" }
/**
* | output |
* | --- |
* | "Created" |
*
* @param {Task_CreatedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_created = /** @type {((inputs?: Task_CreatedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_CreatedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_created(inputs)
	return __en.task_created(inputs)
});
/**
* | output |
* | --- |
* | "Started" |
*
* @param {Task_StartedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_started = /** @type {((inputs?: Task_StartedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_StartedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_started(inputs)
	return __en.task_started(inputs)
});
/**
* | output |
* | --- |
* | "Completed" |
*
* @param {Task_CompletedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_completed = /** @type {((inputs?: Task_CompletedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_CompletedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_completed(inputs)
	return __en.task_completed(inputs)
});
/**
* | output |
* | --- |
* | "Session" |
*
* @param {Task_SessionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_session = /** @type {((inputs?: Task_SessionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_SessionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_session(inputs)
	return __en.task_session(inputs)
});
/**
* | output |
* | --- |
* | "Loading task..." |
*
* @param {Task_LoadingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_loading = /** @type {((inputs?: Task_LoadingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_LoadingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_loading(inputs)
	return __en.task_loading(inputs)
});
/**
* | output |
* | --- |
* | "Final video" |
*
* @param {Task_Finalvideo1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_finalvideo1 = /** @type {((inputs?: Task_Finalvideo1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Finalvideo1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_finalvideo1(inputs)
	return __en.task_finalvideo1(inputs)
});
export { task_finalvideo1 as "task_finalVideo" }
/**
* | output |
* | --- |
* | "Download" |
*
* @param {Task_DownloadInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_download = /** @type {((inputs?: Task_DownloadInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_DownloadInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_download(inputs)
	return __en.task_download(inputs)
});
/**
* | output |
* | --- |
* | "Stages" |
*
* @param {Task_StagesInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_stages = /** @type {((inputs?: Task_StagesInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_StagesInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_stages(inputs)
	return __en.task_stages(inputs)
});
/**
* | output |
* | --- |
* | "Resume from the failed stage. Already-success stages will be reused from cache." |
*
* @param {Task_Resumehelp1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_resumehelp1 = /** @type {((inputs?: Task_Resumehelp1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Resumehelp1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_resumehelp1(inputs)
	return __en.task_resumehelp1(inputs)
});
export { task_resumehelp1 as "task_resumeHelp" }
/**
* | output |
* | --- |
* | "Resuming" |
*
* @param {Task_ResumingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_resuming = /** @type {((inputs?: Task_ResumingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_ResumingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_resuming(inputs)
	return __en.task_resuming(inputs)
});
/**
* | output |
* | --- |
* | "Resume task" |
*
* @param {Task_Resumetask1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_resumetask1 = /** @type {((inputs?: Task_Resumetask1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Resumetask1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_resumetask1(inputs)
	return __en.task_resumetask1(inputs)
});
export { task_resumetask1 as "task_resumeTask" }
/**
* | output |
* | --- |
* | "Danger zone" |
*
* @param {Task_Dangerzone1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_dangerzone1 = /** @type {((inputs?: Task_Dangerzone1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Dangerzone1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_dangerzone1(inputs)
	return __en.task_dangerzone1(inputs)
});
export { task_dangerzone1 as "task_dangerZone" }
/**
* | output |
* | --- |
* | "Wipe the session directory and run this URL again from scratch." |
*
* @param {Task_Rerunhelp1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_rerunhelp1 = /** @type {((inputs?: Task_Rerunhelp1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Rerunhelp1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_rerunhelp1(inputs)
	return __en.task_rerunhelp1(inputs)
});
export { task_rerunhelp1 as "task_rerunHelp" }
/**
* | output |
* | --- |
* | "Rerun task" |
*
* @param {Task_Reruntask1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_reruntask1 = /** @type {((inputs?: Task_Reruntask1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Reruntask1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_reruntask1(inputs)
	return __en.task_reruntask1(inputs)
});
export { task_reruntask1 as "task_rerunTask" }
/**
* | output |
* | --- |
* | "Rerun this task?" |
*
* @param {Task_Reruntitle1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_reruntitle1 = /** @type {((inputs?: Task_Reruntitle1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Reruntitle1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_reruntitle1(inputs)
	return __en.task_reruntitle1(inputs)
});
export { task_reruntitle1 as "task_rerunTitle" }
/**
* | output |
* | --- |
* | "Existing log, session directory and final video will be deleted, then the same URL is re-queued under the same task id." |
*
* @param {Task_Rerundescription1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_rerundescription1 = /** @type {((inputs?: Task_Rerundescription1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Rerundescription1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_rerundescription1(inputs)
	return __en.task_rerundescription1(inputs)
});
export { task_rerundescription1 as "task_rerunDescription" }
/**
* | output |
* | --- |
* | "Rerunning" |
*
* @param {Task_RerunningInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_rerunning = /** @type {((inputs?: Task_RerunningInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_RerunningInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_rerunning(inputs)
	return __en.task_rerunning(inputs)
});
/**
* | output |
* | --- |
* | "Confirm rerun" |
*
* @param {Task_Confirmrerun1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_confirmrerun1 = /** @type {((inputs?: Task_Confirmrerun1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Confirmrerun1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_confirmrerun1(inputs)
	return __en.task_confirmrerun1(inputs)
});
export { task_confirmrerun1 as "task_confirmRerun" }
/**
* | output |
* | --- |
* | "Delete this task, its run log, and the entire session directory under" |
*
* @param {Task_Deletehelp1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_deletehelp1 = /** @type {((inputs?: Task_Deletehelp1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Deletehelp1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_deletehelp1(inputs)
	return __en.task_deletehelp1(inputs)
});
export { task_deletehelp1 as "task_deleteHelp" }
/**
* | output |
* | --- |
* | "Delete task" |
*
* @param {Task_Deletetask1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_deletetask1 = /** @type {((inputs?: Task_Deletetask1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Deletetask1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_deletetask1(inputs)
	return __en.task_deletetask1(inputs)
});
export { task_deletetask1 as "task_deleteTask" }
/**
* | output |
* | --- |
* | "Delete this task?" |
*
* @param {Task_Deletetitle1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_deletetitle1 = /** @type {((inputs?: Task_Deletetitle1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Deletetitle1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_deletetitle1(inputs)
	return __en.task_deletetitle1(inputs)
});
export { task_deletetitle1 as "task_deleteTitle" }
/**
* | output |
* | --- |
* | "This permanently removes the task record, its log file, and the entire session directory. This action cannot be undone." |
*
* @param {Task_Deletedescription1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_deletedescription1 = /** @type {((inputs?: Task_Deletedescription1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Deletedescription1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_deletedescription1(inputs)
	return __en.task_deletedescription1(inputs)
});
export { task_deletedescription1 as "task_deleteDescription" }
/**
* | output |
* | --- |
* | "Deleting" |
*
* @param {Task_DeletingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const task_deleting = /** @type {((inputs?: Task_DeletingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_DeletingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_deleting(inputs)
	return __en.task_deleting(inputs)
});
/**
* | output |
* | --- |
* | "Confirm delete" |
*
* @param {Task_Confirmdelete1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_confirmdelete1 = /** @type {((inputs?: Task_Confirmdelete1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Confirmdelete1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_confirmdelete1(inputs)
	return __en.task_confirmdelete1(inputs)
});
export { task_confirmdelete1 as "task_confirmDelete" }
/**
* | output |
* | --- |
* | "Running tasks cannot be rerun or deleted. Wait until it finishes or fails." |
*
* @param {Task_Runninglocked1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_runninglocked1 = /** @type {((inputs?: Task_Runninglocked1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Runninglocked1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_runninglocked1(inputs)
	return __en.task_runninglocked1(inputs)
});
export { task_runninglocked1 as "task_runningLocked" }
/**
* | output |
* | --- |
* | "Failed to load task" |
*
* @param {Task_Loaderror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_loaderror1 = /** @type {((inputs?: Task_Loaderror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Loaderror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_loaderror1(inputs)
	return __en.task_loaderror1(inputs)
});
export { task_loaderror1 as "task_loadError" }
/**
* | output |
* | --- |
* | "Failed to delete task" |
*
* @param {Task_Deleteerror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_deleteerror1 = /** @type {((inputs?: Task_Deleteerror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Deleteerror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_deleteerror1(inputs)
	return __en.task_deleteerror1(inputs)
});
export { task_deleteerror1 as "task_deleteError" }
/**
* | output |
* | --- |
* | "Failed to rerun task" |
*
* @param {Task_Rerunerror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_rerunerror1 = /** @type {((inputs?: Task_Rerunerror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Rerunerror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_rerunerror1(inputs)
	return __en.task_rerunerror1(inputs)
});
export { task_rerunerror1 as "task_rerunError" }
/**
* | output |
* | --- |
* | "Failed to resume task" |
*
* @param {Task_Resumeerror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const task_resumeerror1 = /** @type {((inputs?: Task_Resumeerror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Task_Resumeerror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.task_resumeerror1(inputs)
	return __en.task_resumeerror1(inputs)
});
export { task_resumeerror1 as "task_resumeError" }
/**

* @param {Stage_RootInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_root = /** @type {((inputs?: Stage_RootInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_RootInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_root(inputs)
	return __en.stage_root(inputs)
});
/**

* @param {Stage_SeparateInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_separate = /** @type {((inputs?: Stage_SeparateInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_SeparateInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_separate(inputs)
	return __en.stage_separate(inputs)
});
/**

* @param {Stage_Separate_AfterInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_separate_after = /** @type {((inputs?: Stage_Separate_AfterInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Separate_AfterInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_separate_after(inputs)
	return __en.stage_separate_after(inputs)
});
/**

* @param {Stage_AsrInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_asr = /** @type {((inputs?: Stage_AsrInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_AsrInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_asr(inputs)
	return __en.stage_asr(inputs)
});
/**

* @param {Stage_Asr_Ocr_PreInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_asr_ocr_pre = /** @type {((inputs?: Stage_Asr_Ocr_PreInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Asr_Ocr_PreInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_asr_ocr_pre(inputs)
	return __en.stage_asr_ocr_pre(inputs)
});
/**

* @param {Stage_Asr_OcrInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_asr_ocr = /** @type {((inputs?: Stage_Asr_OcrInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Asr_OcrInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_asr_ocr(inputs)
	return __en.stage_asr_ocr(inputs)
});
/**

* @param {Stage_Asr_Ocr_FixInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_asr_ocr_fix = /** @type {((inputs?: Stage_Asr_Ocr_FixInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Asr_Ocr_FixInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_asr_ocr_fix(inputs)
	return __en.stage_asr_ocr_fix(inputs)
});
/**

* @param {Stage_TranslateInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_translate = /** @type {((inputs?: Stage_TranslateInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_TranslateInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_translate(inputs)
	return __en.stage_translate(inputs)
});
/**

* @param {Stage_Split_AudioInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_split_audio = /** @type {((inputs?: Stage_Split_AudioInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Split_AudioInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_split_audio(inputs)
	return __en.stage_split_audio(inputs)
});
/**

* @param {Stage_TtsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_tts = /** @type {((inputs?: Stage_TtsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_TtsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_tts(inputs)
	return __en.stage_tts(inputs)
});
/**

* @param {Stage_Merge_AudioInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_merge_audio = /** @type {((inputs?: Stage_Merge_AudioInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Merge_AudioInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_merge_audio(inputs)
	return __en.stage_merge_audio(inputs)
});
/**

* @param {Stage_Merge_VideoInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stage_merge_video = /** @type {((inputs?: Stage_Merge_VideoInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stage_Merge_VideoInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stage_merge_video(inputs)
	return __en.stage_merge_video(inputs)
});
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Settings_ButtonInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_button = /** @type {((inputs?: Settings_ButtonInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_ButtonInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_button(inputs)
	return __en.settings_button(inputs)
});
/**
* | output |
* | --- |
* | "Runtime settings" |
*
* @param {Settings_TitleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_title = /** @type {((inputs?: Settings_TitleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_TitleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_title(inputs)
	return __en.settings_title(inputs)
});
/**
* | output |
* | --- |
* | "Stored locally by the FastAPI backend." |
*
* @param {Settings_DescriptionInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_description = /** @type {((inputs?: Settings_DescriptionInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_DescriptionInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_description(inputs)
	return __en.settings_description(inputs)
});
/**
* | output |
* | --- |
* | "Interface language" |
*
* @param {Settings_LanguageInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_language = /** @type {((inputs?: Settings_LanguageInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_LanguageInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_language(inputs)
	return __en.settings_language(inputs)
});
/**
* | output |
* | --- |
* | "YouTube cookie" |
*
* @param {Settings_CookieInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_cookie = /** @type {((inputs?: Settings_CookieInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_CookieInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_cookie(inputs)
	return __en.settings_cookie(inputs)
});
/**
* | output |
* | --- |
* | "******** saved YouTube cookie ********" |
*
* @param {Settings_Savedcookie1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_savedcookie1 = /** @type {((inputs?: Settings_Savedcookie1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Savedcookie1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_savedcookie1(inputs)
	return __en.settings_savedcookie1(inputs)
});
export { settings_savedcookie1 as "settings_savedCookie" }
/**
* | output |
* | --- |
* | "Paste Netscape cookie content" |
*
* @param {Settings_Cookieplaceholder1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_cookieplaceholder1 = /** @type {((inputs?: Settings_Cookieplaceholder1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Cookieplaceholder1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_cookieplaceholder1(inputs)
	return __en.settings_cookieplaceholder1(inputs)
});
export { settings_cookieplaceholder1 as "settings_cookiePlaceholder" }
/**
* | output |
* | --- |
* | "yt-dlp proxy port" |
*
* @param {Settings_Proxyport1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_proxyport1 = /** @type {((inputs?: Settings_Proxyport1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Proxyport1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_proxyport1(inputs)
	return __en.settings_proxyport1(inputs)
});
export { settings_proxyport1 as "settings_proxyPort" }
/**
* | output |
* | --- |
* | "OpenAI base URL" |
*
* @param {Settings_Baseurl1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_baseurl1 = /** @type {((inputs?: Settings_Baseurl1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Baseurl1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_baseurl1(inputs)
	return __en.settings_baseurl1(inputs)
});
export { settings_baseurl1 as "settings_baseUrl" }
/**
* | output |
* | --- |
* | "OpenAI API key" |
*
* @param {Settings_Apikey1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_apikey1 = /** @type {((inputs?: Settings_Apikey1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Apikey1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_apikey1(inputs)
	return __en.settings_apikey1(inputs)
});
export { settings_apikey1 as "settings_apiKey" }
/**
* | output |
* | --- |
* | "Leave blank to keep existing key" |
*
* @param {Settings_Apikeyplaceholder2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_apikeyplaceholder2 = /** @type {((inputs?: Settings_Apikeyplaceholder2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Apikeyplaceholder2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_apikeyplaceholder2(inputs)
	return __en.settings_apikeyplaceholder2(inputs)
});
export { settings_apikeyplaceholder2 as "settings_apiKeyPlaceholder" }
/**
* | output |
* | --- |
* | "Hide API key" |
*
* @param {Settings_Hideapikey2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_hideapikey2 = /** @type {((inputs?: Settings_Hideapikey2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Hideapikey2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_hideapikey2(inputs)
	return __en.settings_hideapikey2(inputs)
});
export { settings_hideapikey2 as "settings_hideApiKey" }
/**
* | output |
* | --- |
* | "Show API key" |
*
* @param {Settings_Showapikey2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_showapikey2 = /** @type {((inputs?: Settings_Showapikey2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Showapikey2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_showapikey2(inputs)
	return __en.settings_showapikey2(inputs)
});
export { settings_showapikey2 as "settings_showApiKey" }
/**
* | output |
* | --- |
* | "Model" |
*
* @param {Settings_ModelInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_model = /** @type {((inputs?: Settings_ModelInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_ModelInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_model(inputs)
	return __en.settings_model(inputs)
});
/**
* | output |
* | --- |
* | "Select model" |
*
* @param {Settings_Selectmodel1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_selectmodel1 = /** @type {((inputs?: Settings_Selectmodel1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Selectmodel1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_selectmodel1(inputs)
	return __en.settings_selectmodel1(inputs)
});
export { settings_selectmodel1 as "settings_selectModel" }
/**
* | output |
* | --- |
* | "Loading" |
*
* @param {Settings_LoadingInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_loading = /** @type {((inputs?: Settings_LoadingInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_LoadingInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_loading(inputs)
	return __en.settings_loading(inputs)
});
/**
* | output |
* | --- |
* | "Get models" |
*
* @param {Settings_Getmodels1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_getmodels1 = /** @type {((inputs?: Settings_Getmodels1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Getmodels1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_getmodels1(inputs)
	return __en.settings_getmodels1(inputs)
});
export { settings_getmodels1 as "settings_getModels" }
/**
* | output |
* | --- |
* | "Translate concurrency" |
*
* @param {Settings_Translateconcurrency1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_translateconcurrency1 = /** @type {((inputs?: Settings_Translateconcurrency1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Translateconcurrency1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_translateconcurrency1(inputs)
	return __en.settings_translateconcurrency1(inputs)
});
export { settings_translateconcurrency1 as "settings_translateConcurrency" }
/**
* | output |
* | --- |
* | "Parallel OpenAI requests during the translate stage. Increase if your provider allows it." |
*
* @param {Settings_Concurrencyhelp1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_concurrencyhelp1 = /** @type {((inputs?: Settings_Concurrencyhelp1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Concurrencyhelp1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_concurrencyhelp1(inputs)
	return __en.settings_concurrencyhelp1(inputs)
});
export { settings_concurrencyhelp1 as "settings_concurrencyHelp" }
/**
* | output |
* | --- |
* | "Save settings" |
*
* @param {Settings_SaveInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_save = /** @type {((inputs?: Settings_SaveInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_SaveInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_save(inputs)
	return __en.settings_save(inputs)
});
/**
* | output |
* | --- |
* | "OpenAI key is saved." |
*
* @param {Settings_Keysaved1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_keysaved1 = /** @type {((inputs?: Settings_Keysaved1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Keysaved1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_keysaved1(inputs)
	return __en.settings_keysaved1(inputs)
});
export { settings_keysaved1 as "settings_keySaved" }
/**
* | output |
* | --- |
* | "Settings saved." |
*
* @param {Settings_SavedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_saved = /** @type {((inputs?: Settings_SavedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_SavedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_saved(inputs)
	return __en.settings_saved(inputs)
});
/**
* | output |
* | --- |
* | "Failed to save settings" |
*
* @param {Settings_Saveerror1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_saveerror1 = /** @type {((inputs?: Settings_Saveerror1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Saveerror1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_saveerror1(inputs)
	return __en.settings_saveerror1(inputs)
});
export { settings_saveerror1 as "settings_saveError" }
/**
* | output |
* | --- |
* | "No models returned." |
*
* @param {Settings_Nomodels1Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_nomodels1 = /** @type {((inputs?: Settings_Nomodels1Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nomodels1Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_nomodels1(inputs)
	return __en.settings_nomodels1(inputs)
});
export { settings_nomodels1 as "settings_noModels" }
/**
* | output |
* | --- |
* | "Failed to load models" |
*
* @param {Settings_Loadmodelserror2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const settings_loadmodelserror2 = /** @type {((inputs?: Settings_Loadmodelserror2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Loadmodelserror2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_loadmodelserror2(inputs)
	return __en.settings_loadmodelserror2(inputs)
});
export { settings_loadmodelserror2 as "settings_loadModelsError" }
/**
* | output |
* | --- |
* | "queued" |
*
* @param {Status_QueuedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_queued = /** @type {((inputs?: Status_QueuedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_QueuedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_queued(inputs)
	return __en.status_queued(inputs)
});
/**
* | output |
* | --- |
* | "running" |
*
* @param {Status_RunningInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_running = /** @type {((inputs?: Status_RunningInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_RunningInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_running(inputs)
	return __en.status_running(inputs)
});
/**
* | output |
* | --- |
* | "success" |
*
* @param {Status_SuccessInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_success = /** @type {((inputs?: Status_SuccessInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_SuccessInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_success(inputs)
	return __en.status_success(inputs)
});
/**
* | output |
* | --- |
* | "failed" |
*
* @param {Status_FailedInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const status_failed = /** @type {((inputs?: Status_FailedInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Status_FailedInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.status_failed(inputs)
	return __en.status_failed(inputs)
});
/**
* | output |
* | --- |
* | "Download" |
*
* @param {Stages_DownloadInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_download = /** @type {((inputs?: Stages_DownloadInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_DownloadInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_download(inputs)
	return __en.stages_download(inputs)
});
/**
* | output |
* | --- |
* | "Demucs" |
*
* @param {Stages_SeparateInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_separate = /** @type {((inputs?: Stages_SeparateInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_SeparateInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_separate(inputs)
	return __en.stages_separate(inputs)
});
/**
* | output |
* | --- |
* | "Whisper" |
*
* @param {Stages_AsrInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_asr = /** @type {((inputs?: Stages_AsrInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_AsrInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_asr(inputs)
	return __en.stages_asr(inputs)
});
/**
* | output |
* | --- |
* | "Split sentences" |
*
* @param {Stages_Asr_FixInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_asr_fix = /** @type {((inputs?: Stages_Asr_FixInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_Asr_FixInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_asr_fix(inputs)
	return __en.stages_asr_fix(inputs)
});
/**
* | output |
* | --- |
* | "Translate" |
*
* @param {Stages_TranslateInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_translate = /** @type {((inputs?: Stages_TranslateInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_TranslateInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_translate(inputs)
	return __en.stages_translate(inputs)
});
/**
* | output |
* | --- |
* | "Split audio" |
*
* @param {Stages_Split_AudioInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_split_audio = /** @type {((inputs?: Stages_Split_AudioInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_Split_AudioInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_split_audio(inputs)
	return __en.stages_split_audio(inputs)
});
/**
* | output |
* | --- |
* | "VoxCPM" |
*
* @param {Stages_TtsInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_tts = /** @type {((inputs?: Stages_TtsInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_TtsInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_tts(inputs)
	return __en.stages_tts(inputs)
});
/**
* | output |
* | --- |
* | "Merge audio" |
*
* @param {Stages_Merge_AudioInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_merge_audio = /** @type {((inputs?: Stages_Merge_AudioInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_Merge_AudioInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_merge_audio(inputs)
	return __en.stages_merge_audio(inputs)
});
/**
* | output |
* | --- |
* | "Merge video" |
*
* @param {Stages_Merge_VideoInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_merge_video = /** @type {((inputs?: Stages_Merge_VideoInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_Merge_VideoInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_merge_video(inputs)
	return __en.stages_merge_video(inputs)
});
/**
* | output |
* | --- |
* | "Done" |
*
* @param {Stages_DoneInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const stages_done = /** @type {((inputs?: Stages_DoneInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Stages_DoneInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.stages_done(inputs)
	return __en.stages_done(inputs)
});
/**
* | output |
* | --- |
* | "{count} task(s) queued / running" |
*
* @param {Activetaskstext2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const activetaskstext2 = /** @type {((inputs: Activetaskstext2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activetaskstext2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.activetaskstext2(inputs)
	return __en.activetaskstext2(inputs)
});
export { activetaskstext2 as "activeTasksText" }
/**
* | output |
* | --- |
* | "{count} models loaded." |
*
* @param {Loadedmodelstext2Inputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
const loadedmodelstext2 = /** @type {((inputs: Loadedmodelstext2Inputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loadedmodelstext2Inputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.loadedmodelstext2(inputs)
	return __en.loadedmodelstext2(inputs)
});
export { loadedmodelstext2 as "loadedModelsText" }
/**
* | output |
* | --- |
* | "Controls auto-save for editors with unsaved changes." |
*
* @param {Settings_Auto_SaveInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_auto_save = /** @type {((inputs?: Settings_Auto_SaveInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Auto_SaveInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.settings_auto_save(inputs)
	return __en.settings_auto_save(inputs)
});
/**
* | output |
* | --- |
* | "bun {version}" |
*
* @param {Env_Bun_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_bun_pass = /** @type {((inputs: Env_Bun_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Bun_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_bun_pass(inputs)
	return __en.env_bun_pass(inputs)
});
/**
* | output |
* | --- |
* | "bun not found" |
*
* @param {Env_Bun_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_bun_fail = /** @type {((inputs?: Env_Bun_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Bun_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_bun_fail(inputs)
	return __en.env_bun_fail(inputs)
});
/**
* | output |
* | --- |
* | "Python {version} — {path}" |
*
* @param {Env_Python_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_python_pass = /** @type {((inputs: Env_Python_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Python_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_python_pass(inputs)
	return __en.env_python_pass(inputs)
});
/**
* | output |
* | --- |
* | "python not found" |
*
* @param {Env_Python_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_python_fail = /** @type {((inputs?: Env_Python_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Python_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_python_fail(inputs)
	return __en.env_python_fail(inputs)
});
/**
* | output |
* | --- |
* | "uv {version} — {pythonPath}" |
*
* @param {Env_Uv_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_uv_pass = /** @type {((inputs: Env_Uv_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Uv_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_uv_pass(inputs)
	return __en.env_uv_pass(inputs)
});
/**
* | output |
* | --- |
* | "uv not found" |
*
* @param {Env_Uv_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_uv_fail = /** @type {((inputs?: Env_Uv_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Uv_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_uv_fail(inputs)
	return __en.env_uv_fail(inputs)
});
/**
* | output |
* | --- |
* | "ffmpeg {version} ({codecs})" |
*
* @param {Env_Ffmpeg_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_ffmpeg_pass = /** @type {((inputs: Env_Ffmpeg_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Ffmpeg_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_ffmpeg_pass(inputs)
	return __en.env_ffmpeg_pass(inputs)
});
/**
* | output |
* | --- |
* | "ffmpeg not found" |
*
* @param {Env_Ffmpeg_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_ffmpeg_fail = /** @type {((inputs?: Env_Ffmpeg_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Ffmpeg_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_ffmpeg_fail(inputs)
	return __en.env_ffmpeg_fail(inputs)
});
/**
* | output |
* | --- |
* | "Cargo {version}" |
*
* @param {Env_Cargo_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_cargo_pass = /** @type {((inputs: Env_Cargo_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Cargo_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_cargo_pass(inputs)
	return __en.env_cargo_pass(inputs)
});
/**
* | output |
* | --- |
* | "Cargo not found" |
*
* @param {Env_Cargo_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_cargo_fail = /** @type {((inputs?: Env_Cargo_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Cargo_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_cargo_fail(inputs)
	return __en.env_cargo_fail(inputs)
});
/**
* | output |
* | --- |
* | "vcpkg installed" |
*
* @param {Env_Vcpkg_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_vcpkg_pass = /** @type {((inputs?: Env_Vcpkg_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Vcpkg_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_vcpkg_pass(inputs)
	return __en.env_vcpkg_pass(inputs)
});
/**
* | output |
* | --- |
* | "vcpkg submodule not initialized" |
*
* @param {Env_Vcpkg_Fail_SubmoduleInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_vcpkg_fail_submodule = /** @type {((inputs?: Env_Vcpkg_Fail_SubmoduleInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Vcpkg_Fail_SubmoduleInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_vcpkg_fail_submodule(inputs)
	return __en.env_vcpkg_fail_submodule(inputs)
});
/**
* | output |
* | --- |
* | "vcpkg not bootstrapped" |
*
* @param {Env_Vcpkg_Fail_BootstrapInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_vcpkg_fail_bootstrap = /** @type {((inputs?: Env_Vcpkg_Fail_BootstrapInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Vcpkg_Fail_BootstrapInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_vcpkg_fail_bootstrap(inputs)
	return __en.env_vcpkg_fail_bootstrap(inputs)
});
/**
* | output |
* | --- |
* | "vcpkg: Windows only" |
*
* @param {Env_Vcpkg_SkipInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_vcpkg_skip = /** @type {((inputs?: Env_Vcpkg_SkipInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Vcpkg_SkipInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_vcpkg_skip(inputs)
	return __en.env_vcpkg_skip(inputs)
});
/**
* | output |
* | --- |
* | "Vulkan ({gpu})" |
*
* @param {Env_Vulkan_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_vulkan_pass = /** @type {((inputs: Env_Vulkan_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Vulkan_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_vulkan_pass(inputs)
	return __en.env_vulkan_pass(inputs)
});
/**
* | output |
* | --- |
* | "Vulkan not available" |
*
* @param {Env_Vulkan_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_vulkan_fail = /** @type {((inputs?: Env_Vulkan_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Vulkan_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_vulkan_fail(inputs)
	return __en.env_vulkan_fail(inputs)
});
/**
* | output |
* | --- |
* | "ROCm installed (AMD only)" |
*
* @param {Env_Rocm_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_rocm_pass = /** @type {((inputs?: Env_Rocm_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Rocm_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_rocm_pass(inputs)
	return __en.env_rocm_pass(inputs)
});
/**
* | output |
* | --- |
* | "ROCm not available" |
*
* @param {Env_Rocm_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_rocm_fail = /** @type {((inputs?: Env_Rocm_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Rocm_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_rocm_fail(inputs)
	return __en.env_rocm_fail(inputs)
});
/**
* | output |
* | --- |
* | "CUDA {version}" |
*
* @param {Env_Cuda_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_cuda_pass = /** @type {((inputs: Env_Cuda_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Cuda_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_cuda_pass(inputs)
	return __en.env_cuda_pass(inputs)
});
/**
* | output |
* | --- |
* | "CUDA not available (NVIDIA only)" |
*
* @param {Env_Cuda_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_cuda_fail = /** @type {((inputs?: Env_Cuda_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Cuda_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_cuda_fail(inputs)
	return __en.env_cuda_fail(inputs)
});
/**
* | output |
* | --- |
* | "whisper GGML — {size}" |
*
* @param {Env_Whisper_Ggml_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_ggml_pass = /** @type {((inputs: Env_Whisper_Ggml_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Ggml_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_ggml_pass(inputs)
	return __en.env_whisper_ggml_pass(inputs)
});
/**
* | output |
* | --- |
* | "whisper GGML model not found" |
*
* @param {Env_Whisper_Ggml_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_ggml_fail = /** @type {((inputs?: Env_Whisper_Ggml_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Ggml_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_ggml_fail(inputs)
	return __en.env_whisper_ggml_fail(inputs)
});
/**
* | output |
* | --- |
* | "whisper GGML {size} (incomplete)" |
*
* @param {Env_Whisper_Ggml_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_ggml_warn = /** @type {((inputs: Env_Whisper_Ggml_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Ggml_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_ggml_warn(inputs)
	return __en.env_whisper_ggml_warn(inputs)
});
/**
* | output |
* | --- |
* | "whisper VAD — {size}" |
*
* @param {Env_Whisper_Vad_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_vad_pass = /** @type {((inputs: Env_Whisper_Vad_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Vad_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_vad_pass(inputs)
	return __en.env_whisper_vad_pass(inputs)
});
/**
* | output |
* | --- |
* | "VAD model not found" |
*
* @param {Env_Whisper_Vad_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_vad_fail = /** @type {((inputs?: Env_Whisper_Vad_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Vad_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_vad_fail(inputs)
	return __en.env_whisper_vad_fail(inputs)
});
/**
* | output |
* | --- |
* | "VAD model {size} (incomplete)" |
*
* @param {Env_Whisper_Vad_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_vad_warn = /** @type {((inputs: Env_Whisper_Vad_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Vad_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_vad_warn(inputs)
	return __en.env_whisper_vad_warn(inputs)
});
/**
* | output |
* | --- |
* | "whisper sherpa-onnx ready" |
*
* @param {Env_Whisper_Sherpa_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_sherpa_pass = /** @type {((inputs?: Env_Whisper_Sherpa_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Sherpa_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_sherpa_pass(inputs)
	return __en.env_whisper_sherpa_pass(inputs)
});
/**
* | output |
* | --- |
* | "whisper sherpa-onnx model incomplete" |
*
* @param {Env_Whisper_Sherpa_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_sherpa_fail = /** @type {((inputs?: Env_Whisper_Sherpa_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Sherpa_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_sherpa_fail(inputs)
	return __en.env_whisper_sherpa_fail(inputs)
});
/**
* | output |
* | --- |
* | "whisper ONNX — {size}" |
*
* @param {Env_Whisper_Onnx_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_onnx_pass = /** @type {((inputs: Env_Whisper_Onnx_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Onnx_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_onnx_pass(inputs)
	return __en.env_whisper_onnx_pass(inputs)
});
/**
* | output |
* | --- |
* | "whisper ONNX model not found" |
*
* @param {Env_Whisper_Onnx_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_onnx_fail = /** @type {((inputs?: Env_Whisper_Onnx_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Onnx_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_onnx_fail(inputs)
	return __en.env_whisper_onnx_fail(inputs)
});
/**
* | output |
* | --- |
* | "whisper ONNX {size} (incomplete)" |
*
* @param {Env_Whisper_Onnx_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_onnx_warn = /** @type {((inputs: Env_Whisper_Onnx_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Onnx_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_onnx_warn(inputs)
	return __en.env_whisper_onnx_warn(inputs)
});
/**
* | output |
* | --- |
* | "Demucs PyTorch — {size}" |
*
* @param {Env_Demucs_Pth_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_pth_pass = /** @type {((inputs: Env_Demucs_Pth_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Pth_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_pth_pass(inputs)
	return __en.env_demucs_pth_pass(inputs)
});
/**
* | output |
* | --- |
* | "Demucs PyTorch model not found" |
*
* @param {Env_Demucs_Pth_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_pth_fail = /** @type {((inputs?: Env_Demucs_Pth_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Pth_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_pth_fail(inputs)
	return __en.env_demucs_pth_fail(inputs)
});
/**
* | output |
* | --- |
* | "Demucs PyTorch {size} (incomplete)" |
*
* @param {Env_Demucs_Pth_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_pth_warn = /** @type {((inputs: Env_Demucs_Pth_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Pth_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_pth_warn(inputs)
	return __en.env_demucs_pth_warn(inputs)
});
/**
* | output |
* | --- |
* | "Demucs ONNX — {found}/{total} stems" |
*
* @param {Env_Demucs_Onnx_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_onnx_pass = /** @type {((inputs: Env_Demucs_Onnx_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Onnx_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_onnx_pass(inputs)
	return __en.env_demucs_onnx_pass(inputs)
});
/**
* | output |
* | --- |
* | "Demucs ONNX: {found}/{total} stems" |
*
* @param {Env_Demucs_Onnx_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_onnx_fail = /** @type {((inputs: Env_Demucs_Onnx_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Onnx_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_onnx_fail(inputs)
	return __en.env_demucs_onnx_fail(inputs)
});
/**
* | output |
* | --- |
* | "Demucs ONNX: {found}/{total} stems (missing: {missing})" |
*
* @param {Env_Demucs_Onnx_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_onnx_warn = /** @type {((inputs: Env_Demucs_Onnx_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Onnx_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_onnx_warn(inputs)
	return __en.env_demucs_onnx_warn(inputs)
});
/**
* | output |
* | --- |
* | "Demucs GGML — {size}" |
*
* @param {Env_Demucs_Ggml_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_ggml_pass = /** @type {((inputs: Env_Demucs_Ggml_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Ggml_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_ggml_pass(inputs)
	return __en.env_demucs_ggml_pass(inputs)
});
/**
* | output |
* | --- |
* | "Demucs GGML model not found" |
*
* @param {Env_Demucs_Ggml_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_ggml_fail = /** @type {((inputs?: Env_Demucs_Ggml_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Ggml_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_ggml_fail(inputs)
	return __en.env_demucs_ggml_fail(inputs)
});
/**
* | output |
* | --- |
* | "Demucs GGML {size} (incomplete)" |
*
* @param {Env_Demucs_Ggml_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_ggml_warn = /** @type {((inputs: Env_Demucs_Ggml_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Ggml_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_ggml_warn(inputs)
	return __en.env_demucs_ggml_warn(inputs)
});
/**
* | output |
* | --- |
* | "VoxCPM2 ONNX — {found}/{total} files" |
*
* @param {Env_Voxcpm2_Onnx_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm2_onnx_pass = /** @type {((inputs: Env_Voxcpm2_Onnx_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm2_Onnx_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm2_onnx_pass(inputs)
	return __en.env_voxcpm2_onnx_pass(inputs)
});
/**
* | output |
* | --- |
* | "VoxCPM2 ONNX: {found}/{total} files" |
*
* @param {Env_Voxcpm2_Onnx_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm2_onnx_fail = /** @type {((inputs: Env_Voxcpm2_Onnx_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm2_Onnx_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm2_onnx_fail(inputs)
	return __en.env_voxcpm2_onnx_fail(inputs)
});
/**
* | output |
* | --- |
* | "VoxCPM2 ONNX: {found}/{total} files (missing: {missing})" |
*
* @param {Env_Voxcpm2_Onnx_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm2_onnx_warn = /** @type {((inputs: Env_Voxcpm2_Onnx_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm2_Onnx_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm2_onnx_warn(inputs)
	return __en.env_voxcpm2_onnx_warn(inputs)
});
/**
* | output |
* | --- |
* | "VoxCPM2 — {modelSize} + {vaeSize}" |
*
* @param {Env_Voxcpm2_Pth_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm2_pth_pass = /** @type {((inputs: Env_Voxcpm2_Pth_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm2_Pth_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm2_pth_pass(inputs)
	return __en.env_voxcpm2_pth_pass(inputs)
});
/**
* | output |
* | --- |
* | "VoxCPM2 incomplete: {missing}" |
*
* @param {Env_Voxcpm2_Pth_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm2_pth_fail = /** @type {((inputs: Env_Voxcpm2_Pth_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm2_Pth_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm2_pth_fail(inputs)
	return __en.env_voxcpm2_pth_fail(inputs)
});
/**
* | output |
* | --- |
* | "{baseUrl} ({models})" |
*
* @param {Env_Openai_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_openai_pass = /** @type {((inputs: Env_Openai_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Openai_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_openai_pass(inputs)
	return __en.env_openai_pass(inputs)
});
/**
* | output |
* | --- |
* | "{issues}" |
*
* @param {Env_Openai_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_openai_warn = /** @type {((inputs: Env_Openai_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Openai_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_openai_warn(inputs)
	return __en.env_openai_warn(inputs)
});
/**
* | output |
* | --- |
* | "{issues}" |
*
* @param {Env_Openai_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_openai_fail = /** @type {((inputs: Env_Openai_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Openai_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_openai_fail(inputs)
	return __en.env_openai_fail(inputs)
});
/**
* | output |
* | --- |
* | "{issues}" |
*
* @param {Env_Openai_SkipInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_openai_skip = /** @type {((inputs: Env_Openai_SkipInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Openai_SkipInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_openai_skip(inputs)
	return __en.env_openai_skip(inputs)
});
/**
* | output |
* | --- |
* | ".env loaded" |
*
* @param {Env_Dotenv_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_dotenv_pass = /** @type {((inputs?: Env_Dotenv_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Dotenv_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_dotenv_pass(inputs)
	return __en.env_dotenv_pass(inputs)
});
/**
* | output |
* | --- |
* | ".env not found" |
*
* @param {Env_Dotenv_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_dotenv_fail = /** @type {((inputs?: Env_Dotenv_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Dotenv_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_dotenv_fail(inputs)
	return __en.env_dotenv_fail(inputs)
});
/**
* | output |
* | --- |
* | ".env — {issues}" |
*
* @param {Env_Dotenv_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_dotenv_warn = /** @type {((inputs: Env_Dotenv_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Dotenv_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_dotenv_warn(inputs)
	return __en.env_dotenv_warn(inputs)
});
/**
* | output |
* | --- |
* | "whisper.cpp submodule initialized" |
*
* @param {Env_Submodule_Whisper_Cpp_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_whisper_cpp_pass = /** @type {((inputs?: Env_Submodule_Whisper_Cpp_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Whisper_Cpp_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_whisper_cpp_pass(inputs)
	return __en.env_submodule_whisper_cpp_pass(inputs)
});
/**
* | output |
* | --- |
* | "whisper.cpp submodule not initialized" |
*
* @param {Env_Submodule_Whisper_Cpp_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_whisper_cpp_fail = /** @type {((inputs?: Env_Submodule_Whisper_Cpp_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Whisper_Cpp_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_whisper_cpp_fail(inputs)
	return __en.env_submodule_whisper_cpp_fail(inputs)
});
/**
* | output |
* | --- |
* | "demucs.cpp submodule initialized" |
*
* @param {Env_Submodule_Demucs_Cpp_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_demucs_cpp_pass = /** @type {((inputs?: Env_Submodule_Demucs_Cpp_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Demucs_Cpp_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_demucs_cpp_pass(inputs)
	return __en.env_submodule_demucs_cpp_pass(inputs)
});
/**
* | output |
* | --- |
* | "demucs.cpp submodule not initialized" |
*
* @param {Env_Submodule_Demucs_Cpp_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_demucs_cpp_fail = /** @type {((inputs?: Env_Submodule_Demucs_Cpp_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Demucs_Cpp_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_demucs_cpp_fail(inputs)
	return __en.env_submodule_demucs_cpp_fail(inputs)
});
/**
* | output |
* | --- |
* | "demucs-rs submodule initialized" |
*
* @param {Env_Submodule_Demucs_Rs_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_demucs_rs_pass = /** @type {((inputs?: Env_Submodule_Demucs_Rs_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Demucs_Rs_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_demucs_rs_pass(inputs)
	return __en.env_submodule_demucs_rs_pass(inputs)
});
/**
* | output |
* | --- |
* | "demucs-rs submodule not initialized" |
*
* @param {Env_Submodule_Demucs_Rs_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_demucs_rs_fail = /** @type {((inputs?: Env_Submodule_Demucs_Rs_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Demucs_Rs_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_demucs_rs_fail(inputs)
	return __en.env_submodule_demucs_rs_fail(inputs)
});
/**
* | output |
* | --- |
* | "voxcpm-rs submodule initialized" |
*
* @param {Env_Submodule_Voxcpm_Rs_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_voxcpm_rs_pass = /** @type {((inputs?: Env_Submodule_Voxcpm_Rs_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Voxcpm_Rs_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_voxcpm_rs_pass(inputs)
	return __en.env_submodule_voxcpm_rs_pass(inputs)
});
/**
* | output |
* | --- |
* | "voxcpm-rs submodule not initialized" |
*
* @param {Env_Submodule_Voxcpm_Rs_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_submodule_voxcpm_rs_fail = /** @type {((inputs?: Env_Submodule_Voxcpm_Rs_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Submodule_Voxcpm_Rs_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_submodule_voxcpm_rs_fail(inputs)
	return __en.env_submodule_voxcpm_rs_fail(inputs)
});
/**
* | output |
* | --- |
* | "whisper-vulkan — {path}" |
*
* @param {Env_Whisper_Bin_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_bin_pass = /** @type {((inputs: Env_Whisper_Bin_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Bin_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_bin_pass(inputs)
	return __en.env_whisper_bin_pass(inputs)
});
/**
* | output |
* | --- |
* | "whisper-vulkan — {path} (stale)" |
*
* @param {Env_Whisper_Bin_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_bin_warn = /** @type {((inputs: Env_Whisper_Bin_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Bin_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_bin_warn(inputs)
	return __en.env_whisper_bin_warn(inputs)
});
/**
* | output |
* | --- |
* | "whisper-vulkan not compiled" |
*
* @param {Env_Whisper_Bin_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_whisper_bin_fail = /** @type {((inputs?: Env_Whisper_Bin_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Whisper_Bin_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_whisper_bin_fail(inputs)
	return __en.env_whisper_bin_fail(inputs)
});
/**
* | output |
* | --- |
* | "demucs.cpp — {path}" |
*
* @param {Env_Demucs_Ggml_Bin_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_ggml_bin_pass = /** @type {((inputs: Env_Demucs_Ggml_Bin_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Ggml_Bin_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_ggml_bin_pass(inputs)
	return __en.env_demucs_ggml_bin_pass(inputs)
});
/**
* | output |
* | --- |
* | "demucs.cpp — {path} (stale)" |
*
* @param {Env_Demucs_Ggml_Bin_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_ggml_bin_warn = /** @type {((inputs: Env_Demucs_Ggml_Bin_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Ggml_Bin_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_ggml_bin_warn(inputs)
	return __en.env_demucs_ggml_bin_warn(inputs)
});
/**
* | output |
* | --- |
* | "demucs.cpp binary not compiled" |
*
* @param {Env_Demucs_Ggml_Bin_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_ggml_bin_fail = /** @type {((inputs?: Env_Demucs_Ggml_Bin_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Ggml_Bin_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_ggml_bin_fail(inputs)
	return __en.env_demucs_ggml_bin_fail(inputs)
});
/**
* | output |
* | --- |
* | "voxcpm-burn — {binaries}" |
*
* @param {Env_Voxcpm_Burn_Bin_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm_burn_bin_pass = /** @type {((inputs: Env_Voxcpm_Burn_Bin_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm_Burn_Bin_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm_burn_bin_pass(inputs)
	return __en.env_voxcpm_burn_bin_pass(inputs)
});
/**
* | output |
* | --- |
* | "voxcpm-burn" |
*
* @param {Env_Voxcpm_Burn_Bin_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm_burn_bin_warn = /** @type {((inputs?: Env_Voxcpm_Burn_Bin_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm_Burn_Bin_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm_burn_bin_warn(inputs)
	return __en.env_voxcpm_burn_bin_warn(inputs)
});
/**
* | output |
* | --- |
* | "voxcpm-burn not compiled" |
*
* @param {Env_Voxcpm_Burn_Bin_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_voxcpm_burn_bin_fail = /** @type {((inputs?: Env_Voxcpm_Burn_Bin_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Voxcpm_Burn_Bin_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_voxcpm_burn_bin_fail(inputs)
	return __en.env_voxcpm_burn_bin_fail(inputs)
});
/**
* | output |
* | --- |
* | "demucs-burn — {binaries}" |
*
* @param {Env_Demucs_Burn_Bin_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_burn_bin_pass = /** @type {((inputs: Env_Demucs_Burn_Bin_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Burn_Bin_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_burn_bin_pass(inputs)
	return __en.env_demucs_burn_bin_pass(inputs)
});
/**
* | output |
* | --- |
* | "demucs-burn" |
*
* @param {Env_Demucs_Burn_Bin_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_burn_bin_warn = /** @type {((inputs?: Env_Demucs_Burn_Bin_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Burn_Bin_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_burn_bin_warn(inputs)
	return __en.env_demucs_burn_bin_warn(inputs)
});
/**
* | output |
* | --- |
* | "demucs-burn not compiled" |
*
* @param {Env_Demucs_Burn_Bin_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_demucs_burn_bin_fail = /** @type {((inputs?: Env_Demucs_Burn_Bin_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Demucs_Burn_Bin_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_demucs_burn_bin_fail(inputs)
	return __en.env_demucs_burn_bin_fail(inputs)
});
/**
* | output |
* | --- |
* | "subtitle_ocr_ort_cpp — {path}" |
*
* @param {Env_Ocr_Cpp_Bin_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_ocr_cpp_bin_pass = /** @type {((inputs: Env_Ocr_Cpp_Bin_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Ocr_Cpp_Bin_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_ocr_cpp_bin_pass(inputs)
	return __en.env_ocr_cpp_bin_pass(inputs)
});
/**
* | output |
* | --- |
* | "subtitle_ocr_ort_cpp — {path} (stale)" |
*
* @param {Env_Ocr_Cpp_Bin_WarnInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_ocr_cpp_bin_warn = /** @type {((inputs: Env_Ocr_Cpp_Bin_WarnInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Ocr_Cpp_Bin_WarnInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_ocr_cpp_bin_warn(inputs)
	return __en.env_ocr_cpp_bin_warn(inputs)
});
/**
* | output |
* | --- |
* | "OCR C++ binary not compiled" |
*
* @param {Env_Ocr_Cpp_Bin_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_ocr_cpp_bin_fail = /** @type {((inputs?: Env_Ocr_Cpp_Bin_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Ocr_Cpp_Bin_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_ocr_cpp_bin_fail(inputs)
	return __en.env_ocr_cpp_bin_fail(inputs)
});
/**
* | output |
* | --- |
* | "cmake {version}" |
*
* @param {Env_Cmake_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_cmake_pass = /** @type {((inputs: Env_Cmake_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Cmake_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_cmake_pass(inputs)
	return __en.env_cmake_pass(inputs)
});
/**
* | output |
* | --- |
* | "cmake not found" |
*
* @param {Env_Cmake_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_cmake_fail = /** @type {((inputs?: Env_Cmake_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Cmake_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_cmake_fail(inputs)
	return __en.env_cmake_fail(inputs)
});
/**
* | output |
* | --- |
* | "git {version}" |
*
* @param {Env_Git_PassInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_git_pass = /** @type {((inputs: Env_Git_PassInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Git_PassInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_git_pass(inputs)
	return __en.env_git_pass(inputs)
});
/**
* | output |
* | --- |
* | "git not found" |
*
* @param {Env_Git_FailInputs} inputs
* @param {{ locale?: "zh-cn" | "en" }} options
* @returns {LocalizedString}
*/
export const env_git_fail = /** @type {((inputs?: Env_Git_FailInputs, options?: { locale?: "zh-cn" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Env_Git_FailInputs, { locale?: "zh-cn" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh-cn") return __zh_cn.env_git_fail(inputs)
	return __en.env_git_fail(inputs)
});