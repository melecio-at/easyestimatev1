const ja = {
  translation: {
    // define translations below
    form: {
      required: '必須項目に入力してください。',
      min: '入力文字数が不足しています。',
      max: '入力文字数の制限を超えています。',
      email: 'メール形式が無効です。',
      password: {
        minLength: 'パスワードは8文字以上である必要があります。',
        confirm: 'パスワードの確認が一致しません。',
        strong:
          'パスワードには、大文字1文字、特殊文字1文字、および少なくとも8文字が含まれている必要があります。',
      },
    },
    labels: {
      first_name: 'ファーストネーム',
      last_name: '苗字',
      login: 'ログイン',
      signup: 'サインアップ',
      remember_me: '私を覚えてますか',
      forgot_password: 'パスワードをお忘れですか？',
      email_address: '電子メールアドレス',
      password: 'パスワード',
      confirm_password: 'パスワードを認証する',
      submit: '送信',
      update: 'アップデート',
      save: '保存する',
      add_new: '新しく追加する',
      reset_password: 'パスワードを再設定する',
      new_password: '新しいパスワード',
      confirm_new_password: '新しいパスワードを確認',
      enter_keyword: 'キーワードを入力してください',
      get_started: 'はじめましょう',
      integrations: '統合',
      settings: '設定',
      documentation: 'ドキュメンテーション',
      fullname: 'フルネーム',
      inquiry_content: 'お問合わせ内容',
      navigation: 'ナビゲーション',
      resources: 'リソース',
      cancel: 'キャンセル',
      action: 'アクション',
      showPassword: 'パスワードを表示',
      hidePassword: 'パスワードを隠す',
      role: '役割',
      notifications: '通知',
      noNotifications: '新しい通知はありません。',
      newNotification: '新しい通知があります。',
      seeMore: 'もっと見る',
    },
    pages: {
      signup: {
        agree_to_terms: '[サインアップ]をクリックすると、読んだことに同意したことになります',
        signup_complete:
          '確認メールが受信トレイに送信されました。 リンクをクリックして、登録プロセスを完了します。',
        terms_conditions: '規約と条件',
        create_free_account: '無料アカウントを作成する',
      },
      forgot_password: {
        sub_heading: 'アカウントを復旧するには、以下にメールアドレスを入力してください。',
        success: 'パスワードをリセットする方法については、受信トレイを確認してください。',
      },
      reset_password: {
        sub_heading: '新しいパスワードを入力してください。',
        success: 'パスワードは正常に更新されました。',
      },
      users: {
        user_created: 'ユーザーが作成されました。',
        user_updated: 'ユーザーの詳細が更新されました。',
        user_deleted: 'ユーザーが削除されました',
        add_user: 'ユーザーを追加する',
        edit_user: 'ユーザー編集',
        delete_user: 'ユーザーを削除',
        first_name: 'ファーストネーム',
        last_name: '苗字',
        email_address: '電子メールアドレス',
        status: '状態',
        role: '役割',
        delete_confirmation: '選択したユーザーを削除してもよろしいですか？',
      },
      activate: {
        heading: 'アカウントをアクティブ化',
        subtitle: 'アカウントをアクティブ化するためのパスワードを設定します。',
        activated: 'アカウントが有効になりました。 これで、アカウントにログインできます。',
      },
      dashboard: {
        main_heading: 'React Base Templateへようこそ！',
        sub_heading: 'Reactプロジェクトの開発に関する軽量の定型文。',
        new_users: '新しいユーザー',
        total_sales: '総売上高',
        total_orders: '総注文数',
      },
      not_found: {
        title: 'ページが見つかりません',
        sub_heading: 'お探しのページは削除されたか、別の場所へ移動した可能性があります。',
        back_to_top: 'トップページへ戻る',
      },
      faq: {
        heading: 'よくあるご質問',
        sub_heading: 'お客様からお問い合わせいただく質問をQ&A形式でまとめました。',
      },
      inquiry: {
        heading: 'お問い合わせ',
        sub_heading: 'このままお問い合わせされる方は下記のフォームにご入力ください。',
        success_message: 'お問い合わせを送信しました。',
        failed_message: '送信中にエラーが発生しました。',
      },
      profile: {
        heading: 'プロファイル編集',
        sub_heading: 'アカウント情報を更新します。',
        success_message: '詳細が正常に更新されました。',
        failed_message: '更新に失敗しました。',
      },
      landing: {
        main_heading: 'React Base Templateへようこそ！',
        sub_heading: 'Reactプロジェクトの開発に関する軽量の定型文。',
        why_heading: 'なぜベーステンプレートを使用するのですか？',
        docker: {
          heading: '柔軟な環境',
          description:
            '「自分のマシンで動作する」という問題を完全に解消します。 環境のセットアップ、環境固有の問題のデバッグ、およびより移植性が高くセットアップが簡単なコードベースに費やす時間を短縮します。',
        },
        react: {
          heading: '高速で直感的なUI',
          description:
            'ReactJSは非常に直感的に操作でき、UIのレイアウトに双方向性を提供します。 これらのコンポーネントを利用して1つの場所に統合できるように、構成可能です。 したがって、コードははるかに保守可能で柔軟になります。',
        },
        laravel: {
          heading: '強力なAPI',
          description:
            'LaravelのAPI機能を利用してバックエンドAPIを簡単に開発できます。 サードパーティの統合とライブラリが簡単で、すばやく簡単です。',
        },
        our_customers_heading: 'お客様',
        reviews_heading: '私たちのクライアントが言うこと',
        see_all_reviews: 'すべてのレビューを見る',
        call_to_action: '今すぐアプリケーション開発を加速しましょう!',
      },
      about: {
        main_heading: '私たちの物語',
        sub_heading:
          '私たちは、私たちが信じる人々のために誇りに思う作品をデザイン、作成、制作するために協力しています。',
        meet_the_team: 'チームに会う',
        team_description:
          '思いやり、独創性、細部へのこだわりは、私たちが設計、製造、販売するすべての製品の基盤です。',
        our_mission: '私たちの使命',
        mission_description:
          '私たちの使命は、ビジネスのトレンドと人々中心の文化と行動を重視する提案を重視する高品質のサービスと製品で、卓越したテクノロジーを広めることです。',
        our_activities: '私たちの活動',
        activities_description: '生計を立てるのに忙しくて、生計を立てることを忘れないでください。',
      },
      roles: {
        role_created: 'ロールが作成されました。',
        role_updated: '役割の詳細が更新されました。',
        role_deleted: '役割が削除されました。',
        add_role: '役割の追加',
        edit_role: '役割の編集',
        delete_role: '役割の削除',
        name: '名前',
        permissions: '許可',
        delete_confirmation: '選択した役割を削除してもよろしいですか?',
      },
      unauthorized: {
        main_heading: '許可されていません。',
        sub_heading: '申し訳ありませんが、このリソースにアクセスする権限がありません。',
      },
      quotation_list: {
        heading: 'Quotation List',
        sub_heading: 'quotation-If you would like to contact us, please fill out the form below.',
        success_message: 'Your inquiry has been sent.',
        failed_message: 'An error occurred while sending.',
        return_to_sprobe: 'Sprobeサイトへ戻る',
        project_list_heading: '事前定義された見積もりテンプレートのリスト',
        noData: 'No data found.',
        sub_header_section: {
          title: 'かんたん見積ツールをご利用の方へ',
          seeMore: 'もっと読む',
          seeLess: '隠す',
          first_paragraph: {
            1: 'システム、アプリの開発をご検討中の方向けのかんたん見積ツールは必要な機能を選択してかんたんに概算見積をご確認いただけます。',
            2: 'シミュレーション結果はメールアドレスをご登録いただくと、検索いただいた見積を登録したメールアドレスへお届けします。',
            3: 'メールアドレス登録なしでもシミュレーションはご利用いただけます。（保存機能なし）',
            4: '概算見積のシミュレート方法は２つ',
          },
          a: {
            head: 'A.弊社実績に基づいたデータを用いたテンプレートを使って見積を作成する',
            head2: '推奨される機能要件と非機能要件を選択するだけで概算見積を算出',
            head3: '（非エンジニアの方でもかんたんに概算見積の算出を可能にしました）',
            steps: {
              1: 'Step1　検索フィルタ―からシステムのキーワード検索またはフレームワークを選択',
              2: 'Step2　検索結果をフィルタリングすると、目的のシステム/アプリに一致する見積テンプレートが表示される',
              3: 'Step3　目的のシステム/アプリを見つけたら「テンプレートを使う」をクリック',
              4: 'Step4　テンプレートに追加機能等を追加する',
              5: 'Step5　「見積生成」ボタンをクリック',
              6: 'Step6　見積結果の送信　',
            },
          },
          b: {
            head: 'B.スクラッチ（ゼロ）から見積を作成する',
            head2: '（主にシステム開発技術関係者用）',
            steps: {
              1: 'Step1　「見積新規作成」ボタンをクリック',
              2: 'Step2　 必須フィールドに情報を入力',
              3: 'Step3　「見積生成」ボタンををクリック',
              4: 'Step4　見積結果の送信',
            },
          },
          last_paragraph: {
            1: '算出された予算が合わない場合は機能等を調整し、予算の増減をその場でご確認いただけます。',
            2: 'ぜひ貴社のシステム、アプリ開発にご活用ください。',
            3: '※最新のブラウザの利用を推奨しております。',
          },
        },
        label: {
          search: '検索フィルターを入力',
          filter: 'フィルター',
          framework: 'フレームワーク',
          clear_all_filters_btn: 'すべて選択解除',
          create_quotation_btn: '見積を作成',
          use_as_template_btn: 'テンプレートを使う',
          sorting: '並び替え：',
          system_name: 'システム名',
        },
      },
      quotation_create: {
        heading: '【システム要件】',
        label: {
          system_name: 'システム/アプリ名',
          system_name_placeholder: 'システム名を入力',
          business_model: 'ビジネスモデル',
          business_model_placeholder: 'i.e.: B2B, B2C, SaaS, P2P',
          development_type: '開発タイプ',
          num_roles: '想定ユーザータイプ/ロール数',
          devices_and_browsers: '対応ディバイス/ブラウザ',
          devices_and_browsers_placeholder: 'ディバイス／ブラウザ名',
          specify_at_least_one: ' 最低1つを指定してください。',
          design_doc_requirement: '【設計書の要件】',
          ui_layout: 'UIレイアウト/モックアップ',
          spec_requirement: '仕様要件',
          create_design: 'デザイン作成を依頼する',
          design_provided: 'UIレイアウト/モックアップを貴社でご用意いただく',
          create_spec_doc: '仕様書の作成を依頼する',
          spec_doc_provided: '設計書を貴社でご用意いただく',
          features_and_functions: '【機能詳細】',
          framework: 'フレームワーク',
          technology: '開発言語/テクノロジー',
          function_name: '機能名',
          function_name_placeholder: '機能名を入力',
          function_type: '機能タイプ',
          function_type_placeholder: '機能対応を選択',
          num_fields: '想定フィールド/項目数',
          sub_functions: '詳細',
          add_function_btn: '機能を追加',
          cancel_btn: 'キャンセル',
          preview_quotation_btn: '見積もりプレビュー',
          step1_btn: '要件詳細を入力',
          step2_btn: '見積もりのプレビューを確認',
          step3_btn: '見積もりを生成',
        },
      },
      quotation_preview: {
        heading: '見積もりプレビュー',
        emailSentSuccessful: 'Email successfully sent.',
        label: {
          specification: '【システム要件】',
          ui_spec: '【設計書の要件】',
          system_name: 'システム名：',
          business_model: 'ビジネスモデル：',
          development_type: '開発タイプ：',
          project_design_and_planning: 'プロジェクトデザインとプラン：',
          num_roles: '想定ユーザータイプ/ロール数：',
          devices_and_browsers: '対応ディバイス/ブラウザ：',
          ballpark_estimation: '【概算（Ball-Park）見積】',
          features_and_functions: '機能一覧',
          total_mm: '合計（人月）',
          total_yen: '合計',
          back_btn: '戻る',
          generate_quotation_btn: '見積もりを生成する',
        },
      },
      quotation_preview_modal: {
        heading: '概算（Ball-Park）見積資料　ダウンロード申請',
        common: {
          required: '（必須）',
          name: '名前を入力',
          name_placeholder: '名前',
          email: 'メールアドレス',
          email_placeholder: 'メールアドレスを入力',
          business_type: 'ビジネスタイプ',
          phone_number: '電話番号',
          phone_number_placeholder: '電話番号を入力',
          send: '送信',
          options: {
            individual: '個人',
            company: '企業',
          },
        },
        individual: {},
        company: {
          label: {
            company_name: '会社名',
            company_name_placeholder: '会社名を入力',
            department_position: '部署/役職',
            department: '部署を選択',
            department_placeholder: '部署を選択',
            position: '役職を選択',
            position_placeholder: '役職を選択',
            url: '会社URL',
            url_placeholder: '会社URLを入力',
            business_license: '営業許諾',
            business_license_placeholder: '営業許諾を入力',
            get_in_touch: '後日、Sprobeからのフォローアップのご連絡を希望する。',
            get_in_touch_2: 'ご同意いただける方のみご案内させていただきます。',
            accept_terms: '個人情報保護方針',
            accept_terms_2: 'に同意する',
          },
        },
      },
    },
    menu: {
      home: '家',
      about: '約',
      inquiry: 'お問い合わせ',
      faq: 'よくあるご質問',
      dashboard: 'ダッシュボード',
      users: 'ユーザー',
      orders: '注文',
      reports: 'レポート',
      integrations: '統合',
      profile: 'プロフィール',
      login: 'ログイン',
      logout: 'ログアウト',
      terms: '利用規約',
      privacy_policy: 'プライバシーポリシー',
      documentation: 'ドキュメンテーション',
      api_reference: 'APIリファレンス',
      support: 'サポート',
      styleguide: 'スタイルガイド',
      roles: '役割',
      broadcast: '放送',
    },
    table: {
      no_data: 'データなし。',
    },
  },
};

export default ja;
