/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/programs": {
    /** 主にマイページ向けの、特定の会員の拝聴可能なRadioプログラムの一覧取得API */
    get: operations["getPrograms"];
    /** Radioプログラム登録API */
    post: operations["createProgram"];
    parameters: {};
  };
  "/programs/{id}": {
    /** プログラム内の音声データ一覧を取得するAPI */
    get: operations["getProgramChapters"];
    /** Radioプログラム編集API（オーナー向け） */
    put: operations["putProgram"];
    /** Programの論理削除 */
    delete: operations["deleteProgram"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/programs/of_club/{id}": {
    /** クラブに登録されているプログラム一覧を取得するAPI */
    get: operations["getClubPrograms"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/programs/of_club/{id}/for_owner": {
    /** クラブに登録されているプログラム一覧を取得するAPI。オーナー管理画面向け（下書きでフィルター機能がある） */
    get: operations["getClubProgramsForOwner"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/programs/reserved_to_pubslish": {
    /**
     * 放送開始設定が、予約投稿になっていてかつ、予約投稿時間が過去になっているプログラム全てを、公開状態にするAPI。
     * （AWSのLambdaから定期的にリクエストが飛ぶ）
     */
    patch: operations["patchProgramsReservedToPublish"];
    parameters: {};
  };
  "/reaction_comments/of_program/{programId}": {
    /** 特定のプログラムのリアクションコメントを取得するAPI */
    get: operations["getProgramReactionComments"];
    /** 特定のプログラムにリアクションコメントをするAPI */
    post: operations["createProgramReactionComment"];
    parameters: {
      path: {
        programId: number;
      };
    };
  };
  "/reaction_comments/{commentId}": {
    /** リアクションコメントを削除するAPI。(コメント投稿者向け) */
    delete: operations["deleteReactionCommentsCommentId"];
    parameters: {
      path: {
        commentId: number;
      };
    };
  };
  "/play_logs": {
    /** チャプター再生の終了時に叩くAPI。再生停止時に経過時間をrequest bodyに入れるようにする。 */
    put: operations["chapterOfPlayLogEndChapterId"];
    parameters: {};
  };
  "/chapters/{id}": {
    /** Chapterデータを論理削除するのと、S3から音声ファイルを削除するAPI（登録済みデータのみ。つまり、編集中のみ使うAPI） */
    delete: operations["deleteChapterId"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/pre_signed_url": {
    /** 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI */
    post: operations["postPublishPreSignedUrl"];
    parameters: {};
  };
  "/healthcheck": {
    /** healthcheck */
    get: operations["getHealthcheck"];
  };
  "/programs/of_club/{id}/for_attached_pin": {
    /** クラブに登録されている固定プログラムの一覧を取得するAPI */
    get: operations["getProgramsOfClubIdForAttachedPin"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/clubs/{id}": {
    /** idからクラブを取得するAPI */
    get: operations["getClubById"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/clubs/subscribing": {
    /** 自分が参加しているクラブ一覧 */
    get: operations["getSubscribingClubs"];
    parameters: {};
  };
  "/programs/played": {
    /** 特定のユーザーの再生履歴からプログラム一覧を返すAPI */
    get: operations["getProgramsPlayed"];
  };
  "/current_account": {
    /** ログイン中のアカウント情報を取得するAPI */
    get: operations["getCurrentAccount"];
    parameters: {};
  };
  "/reaction_comments/like/{commentId}": {
    /** 特定のコメントをいいねするAPI */
    post: operations["likeReactionComment"];
    /** 特定のコメントのいいねを取り消すAPI */
    delete: operations["deleteReactionCommentsLike"];
    parameters: {
      path: {
        commentId: number;
      };
    };
  };
  "/reaction_comments/{commentId}/hidden": {
    /** リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け） */
    patch: operations["patchReactionCommentsCommentIdHidden"];
    parameters: {
      path: {
        commentId: number;
      };
    };
  };
  "/programs/{id}/attached_pin": {
    /** ラジオの固定表示を解除するためのAPI */
    delete: operations["deleteProgramsIdAttachedPin"];
    /** ラジオを固定表示するためのAPI。固定表示できるラジオは1つのみで、すでにある場合は上書きされる。 */
    patch: operations["patchProgramsIdAttachedPin"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
}

export interface components {
  schemas: {
    /**
     * Program
     * @description Chapterの集合体
     */
    Program: {
      id: number;
      clubId: number;
      club: components["schemas"]["Club"];
      title: string;
      description: string;
      /** @enum {string} */
      scope: "PUBLIC" | "PRIVATE";
      chapters: components["schemas"]["Chapter"][];
      attachedPlans: components["schemas"]["Plan"][];
      isAttachedPin: boolean;
      reactionCommentsCount: number;
      isDraft?: boolean;
      /** Format: date-time */
      releasedAt?: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
    };
    /**
     * Chapter
     * @description 音声ファイルとその説明
     */
    Chapter: {
      id: number;
      programId: number;
      order: number;
      title: string;
      /** @description 固定表示ON/OFF */
      isAttachedPin: boolean;
      /** @description 総再生時間 */
      playTimeSeconds: number;
      mediaUrl: string;
      fileName: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      /** Format: date-time */
      deletedAt?: string;
      playLog?: components["schemas"]["PlayLog"];
    };
    /** Plan */
    Plan: {
      id: number;
      clubId: number;
      name: string;
      info: string;
      image?: string;
    };
    /** Club */
    Club: {
      id: number;
      name: string;
      slug: string;
      description: string;
      icon?: string;
      clubColor: string;
      url: string;
      plans: components["schemas"]["Plan"][];
      twitter_url?: string;
      facebook_url?: string;
      line_url?: string;
      instagram_url?: string;
      youtube_url?: string;
      tiktok_url?: string;
      backgroundImage?: string;
    };
    /** ReactionComment */
    ReactionComment: {
      id: number;
      content: string;
      likedProfiles: components["schemas"]["Profile"][];
      profile: components["schemas"]["Profile"];
      isLiked: boolean;
      /** @description オーナーがコメントを非表示にしているかどうか判定をする */
      isHidden: boolean;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      /** Format: date-time */
      deletedAt?: string;
    };
    /**
     * Profile
     * @description ユーザプロファイル（会員、オーナー、通りすがりの人がありえる）
     */
    Profile: {
      id: number;
      name: string;
      icon?: string;
      isProfilePublic?: boolean;
      publicUrl?: string;
    };
    /** PlayLog */
    PlayLog: {
      id: number;
      programId: number;
      chapterId: number;
      accountId: number;
      elapsedSeconds: number;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
    };
    /** Account */
    Account: {
      id: number;
      plans: components["schemas"]["Plan"][];
      ownerClubIds: number[];
      profileIds: number[];
    };
  };
  responses: {
    /** Example response */
    Programs: {
      content: {
        "application/json": {
          programs: components["schemas"]["Program"][];
          maxPage?: number;
        };
      };
    };
    /** Example response */
    Chapters: {
      content: {
        "application/json": {
          chapters: components["schemas"]["Chapter"][];
        };
      };
    };
    /** Example response */
    ReactionComments: {
      content: {
        "application/json": {
          reactionComments: components["schemas"]["ReactionComment"][];
          nextCursor?: number;
          totalCounts?: number;
        };
      };
    };
    /** Example response */
    Program: {
      content: {
        "application/json": {
          program: components["schemas"]["Program"];
        };
      };
    };
    /** Example response */
    ReactionComment: {
      content: {
        "application/json": {
          reactionComment: components["schemas"]["ReactionComment"];
        };
      };
    };
    /** PreSignedUrlが、S3アップロード用のURLです。s3Urlが、radioファイル等のファイル登録時のfilesのurlに埋め込むURLです。 */
    PreSignedUrl: {
      content: {
        "application/json": {
          preSignedUrl: string;
          s3Url: string;
        };
      };
    };
    /** Example response */
    Chapter: {
      content: {
        "application/json": {
          chapter: components["schemas"]["Chapter"];
        };
      };
    };
    /** Example response */
    ChapterPlayLog: {
      content: {
        "application/json": {
          playLogId: number;
        };
      };
    };
    /** Example response */
    PlayLogs: {
      content: {
        "application/json": {
          playLogs: components["schemas"]["PlayLog"][];
        };
      };
    };
    /** Example response */
    Club: {
      content: {
        "application/json": {
          club: components["schemas"]["Club"];
        };
        "application/xml": { [key: string]: unknown };
      };
    };
    /** Example response */
    Account: {
      content: {
        "application/json": {
          account?: components["schemas"]["Account"];
        };
      };
    };
    /** Example response */
    Clubs: {
      content: {
        "application/json": {
          clubs: components["schemas"]["Club"][];
        };
      };
    };
  };
  requestBodies: {
    /**
     * scopeは、誰でも見れる=0  プラン入会者しか見れない=1
     * attachedPlansIdsは、紐付けるPlanIdの配列
     */
    Program: {
      content: {
        "application/json": {
          clubId: number;
          title: string;
          description: string;
          chapters: {
            title: string;
            fileName: string;
            mediaUrl: string;
            playTimeSeconds: number;
            order: number;
            id?: number;
          }[];
          /** @enum {string} */
          scope: "PUBLIC" | "PRIVATE";
          isDraft: boolean;
          attachedPlansIds: number[];
          isAttachedPin: boolean;
          /** Format: date-time */
          releasedAt?: string;
        };
      };
    };
    ReactionComment: {
      content: {
        "application/json": {
          contents?: string;
        };
      };
    };
    /**
     * contentTypeは無くても良いといえば良いのですが、s3に登録する際のmetadataとして登録します。
     *
     *
     * 例：
     * https://fanclove-radio.s3.ap-northeast-1.amazonaws.com/media/1(clubId)/abc.mp3(fileName)?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJTLX7NCWRPA2NHBA%2F20220708%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20220708T140416Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&x-id=PutObject&X-Amz-Signature=28d152cf695759fb6a6b86fe858c9ecafd8da298025b24481e2f69b7c153d198
     */
    PreSignedUrl: {
      content: {
        "application/json": {
          clubId?: number;
          /** @description MineType　例：image/jpeg */
          contentType?: string;
          fileName?: string;
        };
      };
    };
    PutChapterPlayLog: {
      content: {
        "application/json": {
          programId: number;
          chapterId: number;
          elapsedSeconds: number;
        };
      };
    };
  };
}

export interface operations {
  /** 主にマイページ向けの、特定の会員の拝聴可能なRadioプログラムの一覧取得API */
  getPrograms: {
    parameters: {};
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /** Radioプログラム登録API */
  createProgram: {
    parameters: {};
    responses: {
      200: components["responses"]["Program"];
    };
    requestBody: components["requestBodies"]["Program"];
  };
  /** プログラム内の音声データ一覧を取得するAPI */
  getProgramChapters: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Program"];
    };
  };
  /** Radioプログラム編集API（オーナー向け） */
  putProgram: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Program"];
    };
    requestBody: components["requestBodies"]["Program"];
  };
  /** Programの論理削除 */
  deleteProgram: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  /** クラブに登録されているプログラム一覧を取得するAPI */
  getClubPrograms: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        /** 次ページへのカーソル（ProgramID） */
        cursor?: string;
        /** 全て、閲覧可能、プラン別のタブスイッチャー プランの場合は、プランID */
        switch?: string;
      };
    };
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /** クラブに登録されているプログラム一覧を取得するAPI。オーナー管理画面向け（下書きでフィルター機能がある） */
  getClubProgramsForOwner: {
    parameters: {
      path: {
        id: number;
      };
      query: {
        /** ページ数 */
        page?: number;
        /** ONの場合、下書きのみ取得する */
        isOnlyDraft?: boolean;
        /** 1ページごとの取得件数 */
        pageSize?: number;
        /** Enum: "ASC" "DESC" */
        order?: "ASC" | "DESC";
      };
    };
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /**
   * 放送開始設定が、予約投稿になっていてかつ、予約投稿時間が過去になっているプログラム全てを、公開状態にするAPI。
   * （AWSのLambdaから定期的にリクエストが飛ぶ）
   */
  patchProgramsReservedToPublish: {
    parameters: {
      header: {
        /** 固定の認証トークン */
        AuthrizedToken?: string;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  /** 特定のプログラムのリアクションコメントを取得するAPI */
  getProgramReactionComments: {
    parameters: {
      path: {
        programId: number;
      };
      query: {
        order?: "ASC" | "DESC";
        cursor?: number;
      };
    };
    responses: {
      200: components["responses"]["ReactionComments"];
    };
  };
  /** 特定のプログラムにリアクションコメントをするAPI */
  createProgramReactionComment: {
    parameters: {
      path: {
        programId: number;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
    requestBody: components["requestBodies"]["ReactionComment"];
  };
  /** リアクションコメントを削除するAPI。(コメント投稿者向け) */
  deleteReactionCommentsCommentId: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  /** チャプター再生の終了時に叩くAPI。再生停止時に経過時間をrequest bodyに入れるようにする。 */
  chapterOfPlayLogEndChapterId: {
    parameters: {};
    responses: {
      200: components["responses"]["ChapterPlayLog"];
    };
    requestBody: components["requestBodies"]["PutChapterPlayLog"];
  };
  /** Chapterデータを論理削除するのと、S3から音声ファイルを削除するAPI（登録済みデータのみ。つまり、編集中のみ使うAPI） */
  deleteChapterId: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Chapter"];
    };
  };
  /** 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI */
  postPublishPreSignedUrl: {
    parameters: {};
    responses: {
      200: components["responses"]["PreSignedUrl"];
    };
    requestBody: components["requestBodies"]["PreSignedUrl"];
  };
  /** healthcheck */
  getHealthcheck: {
    responses: {
      /** OK */
      200: {
        content: {
          "text/plain": string;
        };
      };
    };
  };
  /** クラブに登録されている固定プログラムの一覧を取得するAPI */
  getProgramsOfClubIdForAttachedPin: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /** idからクラブを取得するAPI */
  getClubById: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Club"];
    };
  };
  /** 自分が参加しているクラブ一覧 */
  getSubscribingClubs: {
    parameters: {};
    responses: {
      200: components["responses"]["Clubs"];
    };
  };
  /** 特定のユーザーの再生履歴からプログラム一覧を返すAPI */
  getProgramsPlayed: {
    parameters: {
      query: {
        cursor?: string;
      };
    };
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /** ログイン中のアカウント情報を取得するAPI */
  getCurrentAccount: {
    parameters: {};
    responses: {
      200: components["responses"]["Account"];
    };
  };
  /** 特定のコメントをいいねするAPI */
  likeReactionComment: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
  };
  /** 特定のコメントのいいねを取り消すAPI */
  deleteReactionCommentsLike: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
  };
  /** リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け） */
  patchReactionCommentsCommentIdHidden: {
    parameters: {
      path: {
        commentId: number;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
  };
  /** ラジオの固定表示を解除するためのAPI */
  deleteProgramsIdAttachedPin: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Program"];
    };
  };
  /** ラジオを固定表示するためのAPI。固定表示できるラジオは1つのみで、すでにある場合は上書きされる。 */
  patchProgramsIdAttachedPin: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["Program"];
    };
  };
}

export interface external {}
