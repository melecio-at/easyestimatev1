<style>
    .function-section {
        display: flex;
        /* grid-template-columns: 40% 60%; */
        /* gap: 10px; */
        padding: 16px;
    }

    .mm-section {
        display: flex;
        justify-content: flex-end !important;
    }

    .calc-label-value {
        display: flex;
    }

    .sub-functions {
        width: 50%;
    }

    .function-type {
        width: 50%;
        padding-right: '16px';
    }

    .label {
        width: 150px;
        font-weight: bold;
    }

    .amount-value {
        color: #058122;
        font-weight: bold;
    }

    .mm-value {
        color: #c65213;
        font-weight: 700;
        /* font-size: 25px; */
    }

    .colored-label {
        color: #c65213;
    }

    .calc-wrapper {
        font-size: 20px;
        margin-left: auto;
    }

    .user-section {
        padding-left: 20px;
    }

    .bold-label {
        width: 50%;
        font-weight: bold;
    }

    .label-section {
        display: flex;
        grid-template-columns: 50% 50%;
        margin-bottom: 4px;
    }

    .label-section-ui {
        display: flex;
        grid-template-columns: 100%;
        margin-bottom: 4px;
    }

    .inner-project-details-section {
        padding: 0 20px;
    }
</style>
@component('mail::message')

@if(trim($user['company_name']) !== '')
{{$user['company_name']}}<br />
@endif
{{$user['name']}} 様<br />
<br />
※このメールはシステムからの自動返信です <br />
<br />
この度は弊社の「かんたん見積システム」をご利用いただき誠にありがとうございます。<br />
ご確認いただきましたお見積を以下添付させていただきます。<br />
<br />

<span class='bold-label'>【概算見積詳細】</span>
<br /><br />
<div class='project-section'>
    <span class='bold-label'>見積もりプレビュー</span><br /><br />
    <div class='system-requirements-section'>
        <span class='bold-label colored-label'>【システム要件】</span>
        <br /><br />
        <div class='inner-project-details-section'>
            <div class='left-section'>
                <div class='label-section'>
                    <span class='bold-label'>システム名：</span><span>{{$project['systemName']}}</span>
                </div>
                <div class='label-section'>
                    <span class='bold-label'>ビジネスモデル：</span><span>{{$project['businessModel']}}</span>
                </div>
                <div class='label-section'>
                    <span class='bold-label'>開発タイプ：</span><span>{{$project['developmentType']}}</span>
                </div>
            </div>
            <div class='right-section'>
                <div class='label-section'>
                    <span class='bold-label'>想定ユーザータイプ/ロール数：</span><span>{{$project['expectedNumUsers']}}</span>
                </div>
                <div class='label-section'>
                    <div class='bold-label'>対応ディバイス/ブラウザ：</div>
                    <div>
                        @foreach($project['devicesAndBrowsers'] as $device)
                        <span>➧{{$device}}</span>
                        <br />
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<br />
<hr style="width:auto">
<br />
<div class='system-requirements-section'>
    <span class='bold-label colored-label'>【設計書の要件】</span>
    <br /><br />
    <div class='inner-project-details-section'>
        <div class='left-section'>
            <div class='label-section-ui'>
                <span>➧ {{$project['uiLayout']}}</span>
            </div>
            <div class='label-section-ui'>
                <span>➧ {{$project['specRequiement']}}</span>
            </div>
        </div>
    </div>
</div>
</div>
<br />
<hr style="width:auto">
<br />
<div class='user-section'>
    <span class='bold-label colored-label'>機能一覧</span>
    <br /><br />
    @foreach($project['users'] as $user)
    <span class='bold-label'>{{$user['username']}}</span> <br />
    {{$user['framework']}} - {{$user['language']}}
    @foreach($user['functions'] as $function)
    <div class='function-section'>
        <div class='function-type'>
            {{ formtaFunctionNameAndType($function['functionName'], $function['functionType']) }}
        </div>
        <div class='sub-functions'>
            @foreach($function['subFunctions'] as $subFunction)
            @if($subFunction['subFunctionName'] !== null)
            {{$subFunction['subFunctionName']}}<br />
            @else
            @endif
            @endforeach
        </div>
    </div>
    @endforeach
    <hr style="width:auto">
    <br />
    @endforeach
    <div class=' mm-section'>
        <div class='calc-wrapper'>
            <div class='calc-label-value'>
                <div class='label'>合計</div>
                <div class='mm-value'>{{$project['totalMM']}} 人月</div>
            </div>
            <div class='calc-label-value'>
                <div class='label'>合計</div>
                <div class='amount-value'>{{$project['formattedTotalAmount']}}</div>
            </div>
        </div>
    </div>
</div>
<br /><br />
<span class='bold-label'>【前提条件と制限事項】</span><br />
※本見積は超概算の見積です。 詳細が提供され次第、再見積の対象となります。<br />
<br />
※当社や他の開発会社様が受託するいかなる金額もお約束するものではありません。<br />
<br />
詳細見積が必要な場合は、以下のリンクからお気軽に弊社営業担当者までお問い合わせください。<br />
<br />
また、弊社営業担当からも改めて、ご連絡申し上げます。<br />
何卒よろしくお願いいたします。<br />
<br /><br />

<span class='bold-label'>【問い合わせ先】</span><br />
株式会社Sprobe<br />
電話番号：03-6228-3425　（平日9：00～18：00）<br />
メールアドレス：{{$fromAddress}} <br />

@endcomponent