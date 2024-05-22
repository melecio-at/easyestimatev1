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
        Schema::create('lead_users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email_address');
            $table->string('business_type');
            $table->string('company_name')->nullable();
            $table->unsignedBigInteger('department_id')->nullable();
            $table->unsignedBigInteger('position_id')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('company_url')->nullable();
            $table->string('business_license')->nullable();
            $table->tinyInteger('get_intouched')->default(0)->nullable();
            $table->timestamps();

            $table->foreign('department_id')
                ->references('id')
                ->on('departments');

            $table->foreign('position_id')
                ->references('id')
                ->on('positions');
        });

        Schema::table('projects', function (Blueprint $table) {
            $table->unsignedBigInteger('lead_user_id')->nullable()->after('id');
            $table->string('business_model_text')->nullable();

            $table->foreign('lead_user_id')
                ->references('id')
                ->on('lead_users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('lead_users');
        Schema::table('projects', function (Blueprint $table) {
            $table->dropForeign(['lead_user_id']);
            $table->dropColumn('lead_user_id');
        });
        Schema::enableForeignKeyConstraints();
    }
};
