<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->boolean('is_template')->unsigned()->nullable();
            $table->text('system_name')->nullable();
            $table->longText('description')->nullable();
            $table->tinyInteger('number_of_users')->nullable();
            $table->tinyInteger('create_design')->default(0)->nullable();
            $table->tinyInteger('create_specs_doc')->default(0)->nullable();
            $table->timestamps();
        });

        Schema::create('project_assumed_roles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_role');
            $table->unsignedBigInteger('project_id');
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');
        });

        Schema::create('business_models', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
        });

        Schema::create('project_business_models', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('business_model_id');
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');

            $table->foreign('business_model_id')
                ->references('id')
                ->on('business_models')
                ->onDelete('cascade');
        });

        Schema::create('project_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
        });

        Schema::create('project_project_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('project_type_id');
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');

            $table->foreign('project_type_id')
                ->references('id')
                ->on('project_types')
                ->onDelete('cascade');
        });

        Schema::create('frameworks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
        });

        Schema::create('development_languages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->boolean('is_advanced')->unsigned()->default(0)->nullable();
        });

        Schema::create('framework_languages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('framework_id');
            $table->unsignedBigInteger('development_language_id');

            $table->foreign('framework_id')
                ->references('id')
                ->on('frameworks')
                ->onDelete('cascade');

            $table->foreign('development_language_id')
                ->references('id')
                ->on('development_languages')
                ->onDelete('cascade');
        });

        Schema::create('project_role_frameworks_languages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('framework_language_id');
            $table->unsignedBigInteger('assumed_role_id');
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');

            $table->foreign('assumed_role_id')
                ->references('id')
                ->on('project_assumed_roles')
                ->onDelete('cascade');

            $table->foreign('framework_language_id')
                ->references('id')
                ->on('framework_languages')
                ->onDelete('cascade');
        });

        Schema::create('supported_test_envs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('project_supported_test_envs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('support_test_env_id');
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');

            $table->foreign('support_test_env_id')
                ->references('id')
                ->on('supported_test_envs')
                ->onDelete('cascade');
        });

        Schema::create('masterlist_module_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
        });

        Schema::create('masterlist_function_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
        });

        Schema::create('masterlist_functions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('masterlist_module_type_id')->nullable();
            $table->unsignedBigInteger('masterlist_function_type_id')->nullable();
            $table->string('function_name')->nullable();
            $table->tinyInteger('ox')->nullable();
            $table->decimal('screen_count', 5, 2)->nullable();
            $table->string('acceptance_criteria')->nullable();
            $table->decimal('uiux_md', 5, 2)->nullable();
            $table->decimal('design_creation_md', 5, 2)->nullable();
            $table->decimal('development_md', 5, 2)->nullable();
            $table->decimal('qa_testing_md', 5, 2)->nullable();
            $table->decimal('qa_testing_responsive_md', 5, 2)->nullable();
            $table->decimal('translation_md', 5, 2)->nullable();

            $table->foreign('masterlist_module_type_id')
                ->references('id')
                ->on('masterlist_module_types')
                ->onDelete('cascade');

            $table->foreign('masterlist_function_type_id')
                ->references('id')
                ->on('masterlist_function_types')
                ->onDelete('cascade');
        });

        Schema::create('project_assume_role_functions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('assumed_role_id');
            $table->unsignedBigInteger('masterlist_function_id');
            $table->string('function_name');
            $table->string('other_func_type')->nullable();
            $table->string('other_func_type_desc')->nullable();
            $table->timestamps();

            $table->foreign('project_id')
                ->references('id')
                ->on('projects')
                ->onDelete('cascade');

            $table->foreign('assumed_role_id')
                ->references('id')
                ->on('project_assumed_roles')
                ->onDelete('cascade');

            $table->foreign('masterlist_function_id')
                ->references('id')
                ->on('masterlist_functions')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_business_models');
        Schema::dropIfExists('business_models');
        Schema::dropIfExists('project_project_types');
        Schema::dropIfExists('project_types');
        Schema::dropIfExists('project_role_frameworks_languages');
        Schema::dropIfExists('project_frameworks');
        Schema::dropIfExists('framework_languages');
        Schema::dropIfExists('frameworks');
        Schema::dropIfExists('project_dev_languages');
        Schema::dropIfExists('development_languages');
        Schema::dropIfExists('project_supported_test_envs');
        Schema::dropIfExists('supported_test_envs');
        Schema::dropIfExists('project_main_functions');
        Schema::dropIfExists('main_functions');
        Schema::dropIfExists('project_assume_role_functions');
        Schema::dropIfExists('project_assumed_roles');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('masterlist_functions');
        Schema::dropIfExists('masterlist_function_types');
        Schema::dropIfExists('masterlist_module_types');
    }
};
