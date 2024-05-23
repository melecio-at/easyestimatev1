<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('project_assume_role_functions', function (Blueprint $table) {
            $table->integer('group_number')->nullable()->after('assumed_role_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('project_assume_role_functions', function (Blueprint $table) {
            $table->dropColumn('group_number');
        });
    }
};
