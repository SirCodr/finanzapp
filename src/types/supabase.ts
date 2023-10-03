export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      account_types: {
        Row: {
          created_at: string
          id: number
          original_name: string
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          original_name: string
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          original_name?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "account_types_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      account_types_translations: {
        Row: {
          account_type_id: number
          created_at: string
          description: string | null
          id: number
          language_id: number
          name: string
        }
        Insert: {
          account_type_id: number
          created_at?: string
          description?: string | null
          id?: number
          language_id: number
          name: string
        }
        Update: {
          account_type_id?: number
          created_at?: string
          description?: string | null
          id?: number
          language_id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_types_translations_account_type_id_fkey"
            columns: ["account_type_id"]
            referencedRelation: "account_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_types_translations_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          }
        ]
      }
      languages: {
        Row: {
          code: string
          created_at: string
          id: number
          original_name: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: number
          original_name: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: number
          original_name?: string
        }
        Relationships: []
      }
      languages_translations: {
        Row: {
          created_at: string
          from_language_id: number
          id: number
          name: string
          to_language_id: number
        }
        Insert: {
          created_at?: string
          from_language_id: number
          id?: number
          name: string
          to_language_id: number
        }
        Update: {
          created_at?: string
          from_language_id?: number
          id?: number
          name?: string
          to_language_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "languages_translations_from_language_id_fkey"
            columns: ["from_language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "languages_translations_to_language_id_fkey"
            columns: ["to_language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction_categories: {
        Row: {
          created_at: string
          id: number
          original_name: string
          transaction_subcategory_id: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          original_name: string
          transaction_subcategory_id?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          original_name?: string
          transaction_subcategory_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_categories_transaction_subcategory_id_fkey"
            columns: ["transaction_subcategory_id"]
            referencedRelation: "transaction_subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_categories_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction_categories_translations: {
        Row: {
          created_at: string
          id: number
          language_id: number
          name: string
          transaction_category_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          language_id: number
          name: string
          transaction_category_id: number
        }
        Update: {
          created_at?: string
          id?: number
          language_id?: number
          name?: string
          transaction_category_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "transaction_categories_translations_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_categories_translations_transaction_category_id_fke"
            columns: ["transaction_category_id"]
            referencedRelation: "transaction_categories"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction_subcategories: {
        Row: {
          created_at: string
          id: number
          original_name: string
        }
        Insert: {
          created_at?: string
          id?: number
          original_name: string
        }
        Update: {
          created_at?: string
          id?: number
          original_name?: string
        }
        Relationships: []
      }
      transaction_subcategories_translations: {
        Row: {
          created_at: string
          id: number
          language_id: number
          name: string
          transaction_subcategory_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          language_id: number
          name: string
          transaction_subcategory_id: number
        }
        Update: {
          created_at?: string
          id?: number
          language_id?: number
          name?: string
          transaction_subcategory_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "transaction_subcategories_translations_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_subcategories_translations_transaction_subcategory_"
            columns: ["transaction_subcategory_id"]
            referencedRelation: "transaction_subcategories"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction_types: {
        Row: {
          created_at: string
          id: number
          original_name: string
        }
        Insert: {
          created_at?: string
          id?: number
          original_name: string
        }
        Update: {
          created_at?: string
          id?: number
          original_name?: string
        }
        Relationships: []
      }
      transaction_types_translations: {
        Row: {
          created_at: string
          id: number
          language_id: number
          name: string
          transaction_type_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          language_id: number
          name: string
          transaction_type_id: number
        }
        Update: {
          created_at?: string
          id?: number
          language_id?: number
          name?: string
          transaction_type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "transaction_types_translations_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_types_translations_transaction_type_id_fkey"
            columns: ["transaction_type_id"]
            referencedRelation: "transaction_types"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          amount: string
          created_at: string
          date: string
          description: string | null
          destination_account_type_id: number | null
          id: number
          origin_account_type_id: number
          transaction_category_id: number
          transaction_type_id: number
          user_id: number
        }
        Insert: {
          amount: string
          created_at?: string
          date: string
          description?: string | null
          destination_account_type_id?: number | null
          id?: number
          origin_account_type_id: number
          transaction_category_id: number
          transaction_type_id: number
          user_id: number
        }
        Update: {
          amount?: string
          created_at?: string
          date?: string
          description?: string | null
          destination_account_type_id?: number | null
          id?: number
          origin_account_type_id?: number
          transaction_category_id?: number
          transaction_type_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "transactions_destination_account_type_id_fkey"
            columns: ["destination_account_type_id"]
            referencedRelation: "account_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_origin_account_type_id_fkey"
            columns: ["origin_account_type_id"]
            referencedRelation: "account_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_transaction_category_id_fkey"
            columns: ["transaction_category_id"]
            referencedRelation: "transaction_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_transaction_type_id_fkey"
            columns: ["transaction_type_id"]
            referencedRelation: "transaction_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_all_account_types: {
        Args: {
          lang_code: string
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_all_languages: {
        Args: {
          lang_code: string
        }
        Returns: {
          id: number
          name: string
          code: string
        }[]
      }
      get_all_transaction_types: {
        Args: {
          lang_code: string
        }
        Returns: {
          id: number
          name: string
        }[]
      }
      get_all_transactions: {
        Args: {
          lang_code: string
        }
        Returns: {
          id: number
          transaction_type: string
          transaction_category: string
          origin_account_type: string
          description: string
          amount: string
          date: string
        }[]
      }
      get_all_transactions_by_user: {
        Args: {
          user_id_param: number
          lang_code: string
        }
        Returns: {
          id: number
          transaction_type: string
          transaction_category: string
          origin_account_type: string
          description: string
          amount: string
          date: string
        }[]
      }
      get_edit_transaction_by_id: {
        Args: {
          id_param: number
        }
        Returns: Record<string, unknown>
      }
      get_last_transaction: {
        Args: {
          lang_code: string
        }
        Returns: {
          id: number
          transaction_type: string
          transaction_category: string
          origin_account_type: string
          description: string
          amount: string
          date: string
        }[]
      }
      insert_and_return_transaction: {
        Args: {
          transaction_type_id: number
          transaction_category_id: number
          origin_account_type_id: number
          destination_account_type_id: number
          user_id: number
          description: string
          amount: string
          date: string
          lang_code: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
